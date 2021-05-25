import AppList from '../../components/AppList/AppList';
import InputPanel from '../../components/InputPanel/InputPanel';
import JobList from '../../components/JobList/JobList';
import MainPanel from '../../components/MainPanel/MainPanel';
import { useStore } from '../../hooks-store/store';
import './LandingPage.css';
import lpClassDecider from '../../utils/landing-page-class-decider';
import Header from '../../components/Header/Header';


const LandingPage = () => {
    const globalState = useStore()[0];
    
    return (
        <main className="landing-page-main">
            <Header />
            <section className={`main-body-${lpClassDecider(globalState.scrDims)}`}>
                <AppList />
                <JobList />
                <InputPanel />
                <MainPanel />
            </section>
        </main>
    );
};

export default LandingPage;