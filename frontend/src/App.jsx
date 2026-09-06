import { useState } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {

  const [isNight, setIsNight] = useState(false);

  return (
    <div className={isNight ? "night-mode" : "day-mode"}>

      <Hero
        isNight={isNight}
        setIsNight={setIsNight}
      />

      <About
        isNight={isNight}
      />

      <Projects
        isNight={isNight}
      />

      <Contact
        isNight={isNight}
      />

      <Footer />

    </div>
  );
};

export default App;