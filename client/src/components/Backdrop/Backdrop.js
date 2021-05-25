import './Backdrop.css';

const Backdrop = ({children, closeModalHandler}) => {

    return (
        <div className="backdrop-container" onClick={closeModalHandler}>
            {children}
        </div>
    );
};

export default Backdrop;