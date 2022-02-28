import logo from './logo.svg';
import './App.css';
import './animationBackground.css';
import ProgressCard from './components/ProgressCard/ProgressCard';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{height:"100%"}}>
      <Header/>
      <ProgressCard/>
    </div>
  );
}

export default App;
