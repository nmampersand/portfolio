import React from 'react';

import './index.css';

const FadeIn = ({children}) => {
  return (
    <div className='container'>
      { children }
    </div>
  );
};

export default FadeIn;