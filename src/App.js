// import logo from "./logo1.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
