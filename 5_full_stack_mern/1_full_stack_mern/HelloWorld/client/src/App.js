import Main from "./views/Main";
import PersonForm from "./components/PersonForm";
import { Router } from "@reach/router";
import './App.css';

function App() {
  return (
    <div className="App">
        <Main/>
        <PersonForm/>
    </div>
  );
}

export default App;
