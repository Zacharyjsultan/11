// import logo from "./logo1.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Bio from "./Components/Bio";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testtest12" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
