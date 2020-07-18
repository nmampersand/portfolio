import React from 'react';
import './index.css';

import Links from './Links';

const Nav = () => {

  return (
    <div className='nav'>
      <div className='mobile'>
        <Links />
      </div>
      <div className='web'>
        <Links />
      </div>
    </div>
  );
};

export default Nav;