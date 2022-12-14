import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import {useSelector ,useDispatch} from "react-redux";
import Create from './components/Create';
import ReducerTutorial from './components/ReducerTutorial';
import RefTutorial from './components/RefTutorial';
import ContextTutorial from './components/ContextTutorial';
import { TodoList } from './components/TodoList';
import ReactTable from './components/ReactTable';

function App() {

const counter = useSelector((state)=> state.counter)
const dispatch= useDispatch();
  return (
    <div className="main">
      <h2 className='main-header'>React Crud App</h2>
      <h2>Counter is {counter}</h2>
      <button onClick={dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={dispatch({type:"DECREMENT"})}>Decrement</button>
      <ReducerTutorial/>
      <RefTutorial/>
      <div>
        <ReactTable/>
        <ContextTutorial/>
        <TodoList/>
      </div>
      
    </div>
  );
}

export default App;
