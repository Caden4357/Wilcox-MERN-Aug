import FrontPage from './components/FrontPage';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';
import PageTwo from './components/PageTwo';

function App() {
  return (
    <div className="App">
      <Router>
        <FrontPage default/>
        <PageTwo path="/pageTwo"/>
      </Router>
    </div>
  );
}

export default App;
