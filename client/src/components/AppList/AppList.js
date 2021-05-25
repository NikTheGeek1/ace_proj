import App from '../App/App';
import './AppList.css';
import appList from '../../constants/app_list';

const AppList = () => {
    const appsJSX = appList.map(app => {
        return <App key={app.title} title={app.title} url={app.url}/>;
    });

    return (
        <ul className="app-list">
            {appsJSX}
        </ul>
    );
};

export default AppList;