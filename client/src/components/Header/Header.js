import { useState } from 'react';
import './Header.css';
import { PrimaryLink } from '../Buttons/Buttons';
import RegistrationModal from '../Modal/Modal';
import Login from '../Registration/Login/Login';
import { useStore } from '../../hooks-store/store';
import { LOG_USER_OUT } from '../../hooks-store/stores/user-credentials';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [globalState, dispatch] = useStore();

    const toggleModal = () => {
        const closingModal = showModal;
        if (closingModal) {
            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: auto");
        }
        setShowModal(oldState => !oldState);
    };

    const logoutHandler = () => {
        dispatch(LOG_USER_OUT);
    };

    return (
        <section className="header">
            {showModal &&
                <RegistrationModal toggleModal={toggleModal}>
                    <Login closeModal={toggleModal}/>
                </RegistrationModal>
            }
            {
                globalState.userState.isLoggedIn ?
                    <div className="header-login-container">
                        <p>Welcome back {globalState.userState.username}!</p>
                        <PrimaryLink title="Logout" onClick={logoutHandler} />
                    </div> 
                    :
                    <PrimaryLink title="Register/Log in" onClick={toggleModal} />
            }

        </section>
    );
};

export default Header;