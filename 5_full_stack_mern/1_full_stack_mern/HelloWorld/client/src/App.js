import Main from "./views/Main";
import Detail from "./components/Detail";
import { Router } from "@reach/router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/user"/>
        <Detail path="/user/:id"/>
      </Router>
    </div>
  );
}

export default App;
