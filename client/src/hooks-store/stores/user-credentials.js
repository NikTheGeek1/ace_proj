import { initStore } from '../store';
import { removeUserCredentialsCookie, setUserCredentialsCookie} from '../../cookies/cookies-utils';

export const LOG_USER_OUT = "LOG_USER_OUT";
export const LOG_USER_IN = "LOG_USER_IN";
export const JWT_REFRESH = "JWT_REFRESH";

const configureStore = () => {
    const actions = {
        [LOG_USER_IN]: (curState, userObj) => {
            setUserCredentialsCookie(userObj);
            return { userState: { isLoggedIn: true, username: userObj.username, JWT: userObj.access_token }};
        },
        [LOG_USER_OUT]: () => {
            removeUserCredentialsCookie();
            return { userState: { isLoggedIn: false, username: null, JWT: null }};
        },
        [JWT_REFRESH]: (curState, userObj) => {
            return { userState: { isLoggedIn: true, username: userObj.username, JWT: userObj.JWT}}
        }
    }
    initStore(actions, { userState: { isLoggedIn: false, username: null, JWT: null } });
}


export default configureStore;