import './App.css';

const App = ({title, url}) => {

    return (
        <div className="app" onClick={()=> window.open(url, "_blank")}>{title}</div>
    );
};

export default App;