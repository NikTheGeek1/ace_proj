import './Modal.css';
import { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, toggleModal }) => {


    const keyDownHandler = useCallback((e) => {
        if (e.key === "Escape") {
            toggleModal();
        }
    }, [toggleModal]);

    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [keyDownHandler]);


    document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
    const targetElement = document.getElementById('modal');

    const FullScreenModalJSX = (
        <Backdrop closeModalHandler={toggleModal} >
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </Backdrop>
    );

    return ReactDOM.createPortal(FullScreenModalJSX, targetElement);
};

export default Modal;