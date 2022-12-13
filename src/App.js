import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import ReducerTutorial from './components/ReducerTutorial';
import RefTutorial from './components/RefTutorial';
import ContextTutorial from './components/ContextTutorial';

function App() {
  return (
    <div className="main">
      <h2 className='main-header'>React Crud App</h2>
      <ReducerTutorial/>
      <RefTutorial/>
      <div>
        <ContextTutorial/>
      </div>
      
    </div>
  );
}

export default App;
