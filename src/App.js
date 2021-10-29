// import logo from './logo.svg';
import './App.css';
import NavBar from './comp/NavBar';
import UnderContructionPage from './comp/UnderContructionPage';
import FooterBar from './comp/FooterBar';

function App() {
  return (
    <>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}

      <NavBar/>
      
      <UnderContructionPage/>
      <FooterBar/>
    </>
  );
}

export default App;
