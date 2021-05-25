import { useStore } from '../../hooks-store/store';
import './MainPanel.css';

const MainPanel = () => {
    const globalState = useStore()[0];

    return (
        <div className="main-panel">
            {
                globalState.jobState.jobObj ?
                    <iframe title="Main panel iframe" className="main-panel-iframe" src={`https://www.playmolecule.com${globalState.jobState.jobObj.url}`} />
                    :
                    <p className="main-panel-select-a-job-message">Select a job</p>
            }
        </div>
    );
};

export default MainPanel;