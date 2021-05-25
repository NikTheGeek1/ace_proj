import { useEffect, useCallback } from 'react';
import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import { useStore } from './hooks-store/store';
import screenDimensionsStore, { SET_SCREEN_DIMENSIONS } from './hooks-store/stores/screen-dimensions';
import userCredentialsStore, { JWT_REFRESH, LOG_USER_OUT } from './hooks-store/stores/user-credentials';
import selectedJobStore from './hooks-store/stores/selected-job';
import { getUserCredentialsCookie } from './cookies/cookies-utils';
import { JWTValidation } from './services/user-services';

screenDimensionsStore();
userCredentialsStore();
selectedJobStore();

function App() {

  const dispatch = useStore(false)[1];

  const screenResizeHandler = useCallback(() => {
    dispatch(SET_SCREEN_DIMENSIONS, { width: document.documentElement.clientWidth, height: window.innerHeight });
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", screenResizeHandler);
    const userCookies = getUserCredentialsCookie();
    if (userCookies.JWT) {
      JWTValidation(userCookies.JWT,
        resp => dispatch(JWT_REFRESH, userCookies),
        err => dispatch(LOG_USER_OUT)
      );
    }
    return () => {
      window.removeEventListener("resize", screenResizeHandler);
    };
  }, [dispatch, screenResizeHandler]);


  return (
    <LandingPage />
  );
}

export default App;
