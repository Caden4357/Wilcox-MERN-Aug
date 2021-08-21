import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main name="Doe, Jane" initialAge={45} hairColor="Black"/>

      <Main name="Smith, John" initialAge={88} hairColor="Brown"/>

      <Main name="Fillmore, Millard" initialAge={50} hairColor="Brown"/>

      <Main name="Smith, Maria" initialAge={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
