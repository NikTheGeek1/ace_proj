import URLs from './URLs';

export const fetchAllJobs = (cbSuccess, cbError) => {
    fetch(URLs.jobs)
    .then(response => response.json())
    .then(data => cbSuccess(data))
    .catch(err => cbError(err));
};