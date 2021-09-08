import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { Router } from "@reach/router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/users"/>
        <Detail path="/user/:id"/>
        <Update path="/user/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
