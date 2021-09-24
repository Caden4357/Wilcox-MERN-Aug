import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <Main firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <Main firstName="Millard" lastName="Fillmore" age={50} hairColor="Red"/>
      <Main firstName="Maria" lastName="Smith" age={62} hairColor="Blonde"/>
    </div>
  );
}

export default App;
