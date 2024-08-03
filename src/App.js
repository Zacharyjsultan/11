// import logo from "./logo1.png";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing";
import Bio from "./Components/Bio";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import ThreeScene from "./Components/ThreeScene";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/three-scene" element={<ThreeScreenWrapper />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testtest12" element={<Skills />} />
      </Routes>
    </div>
  );
}
const ThreeScreenWrapper = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return <ThreeScene onClick={handleButtonClick} />;
};

export default App;
