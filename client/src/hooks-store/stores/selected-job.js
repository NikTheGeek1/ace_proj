import { initStore } from '../store';

export const ADD_SELECTED_JOB = "ADD_SELECTED_JOB";

const configureStore = () => {
    const actions = {
        [ADD_SELECTED_JOB]: (curState, selectedJob) => {
            return { jobState: { jobObj: selectedJob }};
        }
    }
    initStore(actions, { jobState: { jobObj: null } });
}


export default configureStore;