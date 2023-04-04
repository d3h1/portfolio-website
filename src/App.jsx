import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, RandomBackgroundCanvas } from './components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-null-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z=0'>
            <Contact />
            <RandomBackgroundCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
