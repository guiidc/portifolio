import React from 'react';
import '../css/Technologies.css';
import javaScriptIcon from '../icons/tech-javascript-icon.svg';
import reactIcon from '../icons/tech-react-icon.svg';
import nodeIcon from '../icons/tech-node-icon.svg';
import htmlIcon from '../icons/tech-html-icon.svg';
import cssIcon from '../icons/tech-css-icon.svg';
import pythonIcon from '../icons/tech-python-icon.svg';
import photoshopIcon from '../icons/tech-photoshop-icon.svg';
import illustratorIcon from '../icons/tech-illustrator-icon.svg';

export default function Technologies() {
  return (
    <div id="technologies" className="container-gray">
      <h2>Algumas Tecnologias</h2>
      <div className="tech-icons-container">
          <div className="tech-icon">
            <img className="tech-img" src={ javaScriptIcon } alt="icone do logotipo do JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ reactIcon } alt="icone do logotipo do React" />
            <span>JReact</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ nodeIcon } alt="icone do logotipo do NodeJs" />
            <span>NodeJS</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ htmlIcon } alt="Icone do logotipo do HTML" />
            <span>HTML</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ cssIcon } alt="Icone do logotipo do CSS" />
            <span>CSS</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ pythonIcon } alt="icone do logotipo do Python" />
            <span>Python</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ photoshopIcon } alt="Icones do logotpo do Photoshop" />
            <span>Photoshop</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ illustratorIcon } alt="Icone do logotipo do Illustrator" />
            <span>Illustrator</span>
          </div>
      </div>
    </div>
  )
}