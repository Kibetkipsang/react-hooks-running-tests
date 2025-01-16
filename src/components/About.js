import React from 'react';
import image from '../assets/imagery.jpg'; // Ensure the correct path and file extension

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>I am the Best!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;