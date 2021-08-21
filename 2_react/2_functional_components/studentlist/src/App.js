import React, {useState} from 'react';
import Form from './components/Form'
import Display from './components/Display';
import './App.css';

function App() {
  const [studentList, setStudentList] = useState([]);

  return (
    <div className="App">
      <Form studentList={studentList} setStudentList={setStudentList}/>
      <Display studentList={studentList}/>
    </div>
  );
}

export default App;
