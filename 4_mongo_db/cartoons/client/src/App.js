import './App.css';
import { Router } from '@reach/router';
import AllCartoons from './components/AllCartoons';
import CreateCartoon from "./components/CreateCartoon";
import OneCartoon from './components/OneCartoon';
import EditCartoon from './components/EditCartoon';
import Header from './components/Header';
import LogAndReg from './views/LogAndReg';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <LogAndReg default /> 
        <AllCartoons path="/allCartoons"/>
        <CreateCartoon path="/cartoon/new"/>
        <OneCartoon path="/cartoon/:id"/>
        <EditCartoon path="/cartoon/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;


