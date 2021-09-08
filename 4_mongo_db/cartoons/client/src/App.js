import './App.css';
import { Router } from '@reach/router';
import AllCartoons from './components/AllCartoons';
import CreateCartoon from "./components/CreateCartoon";
import OneCartoon from './components/OneCartoon';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllCartoons default/>
        <CreateCartoon path="/cartoon/new"/>
        <OneCartoon path="/cartoon/:id"/>
      </Router>
    </div>
  );
}

export default App;
