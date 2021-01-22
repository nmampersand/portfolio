import React from 'react';

import './index.css';
import FadeIn from '../FadeIn';

const About = () => (
  <FadeIn>
    <h2>developer. creative. traveler. ex-barista.</h2>
    <hr />
    <p>hi, I'm nicole ampersand. I am a developer driven by curiosity,
      an eagerness to learn, a pursuit to write beautiful and efficient code,
      and a good cup of coffee. projects built with AWS/Node/React are my jam,
      though I've had experience with many languages and tech stacks. when
      I'm not coding, you'll find me in my sewing studio or garden.
    </p>
    <div className='links'>
      <a 
        href='https://www.linkedin.com/in/nicole-ampersand/'
        target="_blank"
        rel="noopener noreferrer"
      >
      <i className="fab fa-linkedin"></i>
      </a>
      <a 
        href='https://github.com/nmampersand'
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href='https://dev.to/nmampersand'
        target="_blank"
        rel="noopener noreferrer"
      >
      <i className="fab fa-dev"></i>
      </a>
      <a 
        href='https://stackoverflow.com/users/13945626/nicole-ampersand'
        target="_blank"
        rel="noopener noreferrer"
      >
      <i className="fab fa-stack-overflow"></i>
      </a>
    </div>
  </FadeIn>
);

export default About;
