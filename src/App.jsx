import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  RandomBackgroundCanvas,
} from "./components";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="relative z=0">
          <Hero />
          <RandomBackgroundCanvas />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z=0">
          <Contact />
          <RandomBackgroundCanvas />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
