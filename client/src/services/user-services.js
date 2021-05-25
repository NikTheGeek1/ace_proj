import URLs from "./URLs";
import ErrorHandling from './ErrorHandling';

export const userLogIn = (username, password, cbSuccess, cbError) => {
    fetch(URLs.userLogIn, {
        method: "POST",
        headers: {
            "Application": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
        .then(res => res.json())
        .then(response => {
            ErrorHandling.simpleErrorHandler(response);
            cbSuccess(response);
        })
        .catch(err => cbError(err));
};


export const userSignUp = (username, password, cbSuccess, cbError) => {
    fetch(URLs.userSignUp, {
        method: "POST",
        headers: {
            "Application": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
        .then(res => res.json())
        .then(response => {
            ErrorHandling.simpleErrorHandler(response);
            cbSuccess(response);
        })
        .catch(err => cbError(err));
};

export const JWTValidation = (JWT, cbSuccess, cbError) => {
    fetch(URLs.userJWT, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${JWT}`,
            "Application": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(response => {
            ErrorHandling.simpleErrorHandler(response);
            cbSuccess(response);
        })
        .catch(err => cbError(err));
};