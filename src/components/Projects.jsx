import React from 'react';
import projectBlank from '../images/project-blank.svg';
import gitHubIcon1 from '../icons/github-icon-1.svg';
import '../css/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Projects() {
  AOS.init({ duration: 1000})
  return (
    <div id="projects" className="container-red">
      <h2 data-aos="fade-right">Projetos Recentes</h2>
      <p data-aos="fade-left">Gostaria de ver mais alguns projetos? Acesse o GitHub <a href="https://github.com/guiidc">clicando aqui.</a></p>
      <div className="projects-container">
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto1" />
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto2" />
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto3" />
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto4" />
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto5" />
      <img data-aos="zoom-out" className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto6" />
      </div>
      <button data-aos="flip-up" id="github-button">
        <img src={ gitHubIcon1 }  alt="icone do gitHub"/>
        <a href="https://github.com/guiidc">Veja mais no GitHub</a>
      </button>
      
    </div>
  )
}