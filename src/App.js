// import logo from './logo.svg';
import './App.css';
import NavBar from './comp/NavBar';
import FooterBar from './comp/FooterBar';
import Content from './comp/Content';
// import UnderContructionPage from './comp/UnderContructionPage';

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
      {/* <UnderContructionPage/> */}
      <Content/>
      {/* <CardItems/> */}
      <FooterBar/>
          </>
    
  );
  
}

export default App;
