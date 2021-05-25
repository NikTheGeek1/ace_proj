import { useStore } from '../../hooks-store/store';
import './Job.css'
import { ADD_SELECTED_JOB } from '../../hooks-store/stores/selected-job';
import urlImage from '../../static/images/url.png';

const Job = ({ job, onClick, selected }) => {
    const dispatch = useStore(false)[1];
    const clickHandler = () => {
        onClick(job.jobid);
        dispatch(ADD_SELECTED_JOB, job);
    };

    return (
        <div onClick={clickHandler} className={`${selected ? "job-row-selected" : 'job-row'} ${job.status === 4 && "job-row-status-4"}`}>
            <div className="job-item">{job.description}</div>
            <div className="job-item">{job.jobid}</div>
            <img className="job-item job-url" alt="url-icon" src={urlImage} onClick={()=> window.open(`https://www.playmolecule.com${job.url}`, "_blank")}></img>
        </div>
    );
};

export default Job;