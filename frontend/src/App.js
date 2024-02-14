import logo from './logo.svg';
import './App.css';
import { MyContextProvider } from './context/Context'; // Import your context provider
import ExampleComponent from './components/example';
import FetchComponent from './components/fetch';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ExampleComponent/>
          <FetchComponent/>
        </header>

       
      </div>
    </MyContextProvider>
  );
}

export default App;
