import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
const App = () => {
  return (
    <div className="overflow-hidden bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    

      <NavBar />
      <Hero />
      <About />
      <Technologies />
    </div>
  );
};

export default App;
