import './Buttons.css';

export const PrimaryLink = ({ title, onClick }) => {
    return <button className="primary-link" onClick={onClick}>{title}</button>;
};

export const FormButton = ({ title, onClick, extraProps }) => {

    return <button className="button" onClick={onClick} style={extraProps}>{title}</button>
};