import "./App.css";
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
