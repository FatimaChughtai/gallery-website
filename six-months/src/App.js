import './App.css';
import RandomImage from './components/RandomImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Shailee's and Fatima's Trip Scrapbook!
        </h1>
      </header>
      <div className="Vancouver">
        <h2> Vancouver </h2>
        <RandomImage city="vancouver" className="vancouverOne"/>
        <RandomImage city="vancouver" className="vancouverTwo"/>
        <RandomImage city="vancouver" className="vancouverThree"/>
      </div>
    </div>
  );
}

export default App;