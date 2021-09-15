import React from 'react';
import '../css/Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-text">
          <h1>Olá Mundo</h1>
          <h1>Desenvolvedor <span>Full-Stack</span></h1>
          <button id="contact-hero-btn" >Contato</button>
        </div>
      </div>
    );
  }
}

export default Hero;
