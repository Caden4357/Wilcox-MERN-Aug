import React, {useState} from 'react';
import Main from './components/Main'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Main todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
