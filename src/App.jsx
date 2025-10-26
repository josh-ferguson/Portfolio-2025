import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/porfolio/Porfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <Intro />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
