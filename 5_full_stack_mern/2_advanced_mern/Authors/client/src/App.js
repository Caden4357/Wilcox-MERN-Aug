import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './views/EditAuthor';
import Main from './views/Main';
import OneAuthor from './views/OneAuthor';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Main default />
        <NewAuthor path="/new/author"/>
        <OneAuthor path="/author/:id"/>
        <EditAuthor path="/author/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
