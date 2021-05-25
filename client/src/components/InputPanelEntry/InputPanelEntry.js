import './InputPanelEntry.css';

const InputPanelEntry = ({ type, title }) => {

    return (
        <div className={`input-panel-entry-${type}`}>{title}</div>
    );
};

export default InputPanelEntry;