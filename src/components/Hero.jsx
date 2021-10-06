import React from 'react';
import '../css/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Hero extends React.Component {
  render() {
    AOS.init({ duration: 1000})
    return (
      <div className="hero-container">
        <div className="hero-text" >
          <h1 data-aos="fade-right">Olá Mundo</h1>
          <h1 data-aos="fade-right">Desenvolvedor <span>Full-Stack</span></h1>
          <button id="contact-hero-btn" data-aos="fade-left">Contato</button>
        </div>
      </div>
    );
  }
}

export default Hero;
