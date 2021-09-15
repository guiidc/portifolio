import React from 'react';
import perfil from '../images/perfil.png';
import aboutIcon from '../icons/about-icon.svg';
import '../css/About.css';

export default function About() {
 return (
   <div className="container-white">
     <img
      src={ perfil }
      alt="foto de perfil de Guilherme"
      id="perfil-image"
      />
      <h2>Quem é <span>Guilherme?</span></h2>
     <p id="description">
     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
     </p>
     <img
      id="about-icon"
      src={ aboutIcon }
      alt="Ícone illustrativo da sessão about (6 pontos)"
     />
   </div>
 )
}