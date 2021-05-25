import { initStore } from '../store';

export const SET_SCREEN_DIMENSIONS = "SET_SCREEN_DIMENSIONS";

const configureStore = () => {
    const actions = {
        [SET_SCREEN_DIMENSIONS]: (curState, scrDims) => {
            return { scrDims };
        }
    }
    initStore(actions, { scrDims: {width: document.documentElement.clientWidth, height: window.innerHeight} });
}


export default configureStore;