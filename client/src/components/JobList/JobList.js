import { useState, useEffect } from 'react';
import Job from '../Job/Job';
import './JobList.css';
import { fetchAllJobs } from '../../services/jobs-services';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState('');

    useEffect(() => {
        fetchAllJobs(
            fetchedJobs => setJobs(fetchedJobs),
            err => console.log(err)
        );
    }, []);

    const clickJobHandler = (jobid) => {
        setSelectedJob(jobid);
    };

    const jobsJSX = jobs.map(job => {
        return <Job key={job.jobid} job={job} onClick={clickJobHandler} selected={selectedJob === job.jobid}/>;
    });
    return (
        <div className="job-list-container">
            <p className="job-list-title">KDEEP sessions</p>
            <div className="job-list-column-names">
                <p>Description</p>
                <p>JobID</p>
                <p className="job-list-column-names-item column-name-url">Url</p>
            </div>
            {jobsJSX}
        </div>
    );
};

export default JobList;