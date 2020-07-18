import React from 'react';
import './index.css';
import { Link } from '@reach/router';

const Links = () => (
  <>
    <Link to='/' className='home'>
      <i className="fas fa-home" />
    </Link>
    <Link to='/blog' className='blog'>
      <i className="fas fa-blog" />
    </Link>
    <Link to='/projects'>
      <i className="fas fa-project-diagram" />
    </Link>
  </>
);

export default Links;