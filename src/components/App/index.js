import React from 'react';
import {Router} from '@reach/router';
import About from '../About';
import './index.css';
// import Nav from '../Nav';
// import Blog from '../Blog';
// import Projects from '../Projects';
import NotFound from '../NotFound';

const App = () => {
  return (
    <div className="app">
      {/* uncomment when other routes are ready */}
      {/* <Nav /> */}
      <div className='main'>
        <Router>
          <About path='/' />
          {/* uncomment when routes are ready */}
          {/* <Blog path='/blog' />
          <Projects path='/projects' /> */}
          <NotFound default />
        </Router>
      </div>
      <p className='copyright'>© { new Date().getFullYear() } Nicole Ampersand</p>
    </div>
  );
};

export default App;
