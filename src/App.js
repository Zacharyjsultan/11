import logo from "./logo1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Is this my portfolio or just a cookbook?</p>
        <p>Coming Sometime!</p>
        <a
          className="App-link"
          href="mailto:zacharyjsultan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me!
        </a>
      </header>
    </div>
  );
}

export default App;
