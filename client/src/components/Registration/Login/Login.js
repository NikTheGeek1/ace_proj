import { useState } from 'react';
import { useStore } from '../../../hooks-store/store';
import { FormButton, PrimaryLink } from '../../Buttons/Buttons';
import FormInput from '../../FormIpnut/FormInput';
import './Login.css';
import { userLogIn, userSignUp } from '../../../services/user-services';
import { LOG_USER_IN } from '../../../hooks-store/stores/user-credentials';

const processTypeToggle = {
    LOGIN: "REGISTER",
    REGISTER: "LOGIN"
};

const Login = ({ closeModal }) => {
    const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
    const [processType, setProcessType] = useState("LOGIN");
    const dispatch = useStore()[1];
    const [errorMessage, setErrorMessage] = useState('');

    const userCredentialsHandler = (input, credType) => {
        const updatedState = { ...userCredentials };
        updatedState[credType] = input;
        setUserCredentials(updatedState);
    };

    const toggleProcessType = () => {
        setProcessType(processTypeToggle[processType]);
    };
    
    const onSuccessfullResponse = (resp) => {
        if (!resp.success) {
            setErrorMessage(resp.message);
        } else {
            dispatch(LOG_USER_IN, resp);
            setErrorMessage('');
            closeModal();
        }
    };

    const submitFormHandler = () => {
        if (!userCredentials['username'].trim() || !userCredentials['password'].trim()) return;
        if (processType === "LOGIN") {
            userLogIn(userCredentials['username'], userCredentials['password'],
                resp => onSuccessfullResponse(resp),
                err => setErrorMessage(err.message)

            );
        } else if (processType === "REGISTER") {
            userSignUp(userCredentials['username'], userCredentials['password'],
                resp => onSuccessfullResponse(resp),
                err => setErrorMessage(err.message)

            );
        }
    };

    return (
        <div className="login-container">
            <p className="process-modal-title">{processType === "LOGIN" ? "Log in" : "Sign up"}</p>
            <hr />
            <p className="error-message">{errorMessage}</p>
            <FormInput
                onChange={input => userCredentialsHandler(input, "username")}
                placeholder="Username"
                label="Username"
                type="text"
                value={userCredentials.username}
            />
            <FormInput
                onChange={input => userCredentialsHandler(input, "password")}
                placeholder="Password"
                label="Password"
                type="password"
                value={userCredentials.password}
            />
            <FormButton title="Submit" onClick={submitFormHandler} extraProps={{ justifySelf: "center" }} />
            <p className="no-account-toggle-text">{processType === "LOGIN" ? "I don't have an account. " : "Already a member? "}
                <PrimaryLink title={processType === "LOGIN" ? "Create an account" : "Log in"} onClick={toggleProcessType} />
            </p>
        </div>
    );
};

export default Login;