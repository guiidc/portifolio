import React from 'react';
import perfil from '../images/perfil.png';
import aboutIcon from '../icons/about-icon.svg';
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  AOS.init({ duration: 1000})
 return (
   <div id="about" className="container-white">
     <img
      data-aos="zoom-out"
      src={ perfil }
      alt="foto de perfil de Guilherme"
      id="perfil-image"
      />
      <h2 data-aos="fade-right">Quem é <span>Guilherme?</span></h2>
     <p id="description" data-aos="fade-left">
     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
     </p>
     <img
      data-aos="zoom-out"
      id="about-icon"
      src={ aboutIcon }
      alt="Ícone illustrativo da sessão about (6 pontos)"
     />
   </div>
 )
}