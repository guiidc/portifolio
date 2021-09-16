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
    <div className="container-gray">
      <h2>Algumas Tecnologias</h2>
      <div className="tech-icons-container">
          <div className="tech-icon">
            <img className="tech-img" src={ javaScriptIcon }/>
            <span>JavaScript</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ reactIcon }/>
            <span>JReact</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ nodeIcon }/>
            <span>NodeJS</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ htmlIcon }/>
            <span>HTML</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ cssIcon }/>
            <span>CSS</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ pythonIcon }/>
            <span>Python</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ photoshopIcon }/>
            <span>Photoshop</span>
          </div>
          <div className="tech-icon">
            <img className="tech-img" src={ illustratorIcon }/>
            <span>Illustrator</span>
          </div>
      </div>
    </div>
  )
}