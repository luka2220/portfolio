import Navbar from "./components/navbar/Nabvar";
import Home from "./components/home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="image-bg"
      >
        <Home />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#070F2B" }} id="about">
        <h1 className="text-3xl text-white">About</h1>
        <Home />
        <Home />
        <Home />
      </div>
      <div
        style={{ height: "100vh", backgroundColor: "#070F2B" }}
        id="portfolio"
      >
        <h1 className="text-3xl text-white">Portfolio</h1>
        <Home />
        <Home />
        <Home />
      </div>
      <div
        style={{ height: "100vh", backgroundColor: "#070F2B" }}
        id="technologies"
      >
        <h1 className="text-3xl text-white">Technologies</h1>
        <Home />
        <Home />
        <Home />
      </div>
    </>
  );
}

export default App;
