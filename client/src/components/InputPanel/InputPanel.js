import InputPanelEntry from '../InputPanelEntry/InputPanelEntry';
import './InputPanel.css';

const InputPanel = () => {

    return (
        <div className="empty-input-panel-container">
            <InputPanelEntry type={1} title="Job Configuration"/>
            <InputPanelEntry type={2} title="SHOW LIGANDS"/>
            <InputPanelEntry type={2} title="SHOW 3D VIEWER"/>
            <InputPanelEntry type={2} title="DOWNLOAD RESULTS"/>
            <InputPanelEntry type={2} title="DOWNLOAD OUTPUT SDF"/>
            <InputPanelEntry type={1} title="Job information"/>
            <InputPanelEntry type={3} title="Property"/>
            <InputPanelEntry type={3} title="Number molecules"/>
            <InputPanelEntry type={3} title="Prediction time"/>
        </div>
    );
};

export default InputPanel;