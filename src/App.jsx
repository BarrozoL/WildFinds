import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import AnimalList from "./pages/AnimalList";
import Errorpage from "./pages/Errorpage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animal-list" element={<AnimalList />} />
        <Route path="/animal-list/:id" element={<AnimalDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
