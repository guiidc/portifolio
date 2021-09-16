import React from 'react';
import projectBlank from '../images/project-blank.svg';
import gitHubIcon1 from '../icons/github-icon-1.svg';
import '../css/Projects.css';

export default function Projects() {
  return (
    <div id="projects" className="container-red">
      <h2>Projetos Recentes</h2>
      <p>Gostaria de ver mais alguns projetos? Acesse o GitHub <a href="https://github.com/guiidc">clicando aqui.</a></p>
      <div className="projects-container">
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto1" />
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto2" />
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto3" />
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto4" />
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto5" />
      <img className="project-thumbnail" src={ projectBlank } alt="thumbnail projeto6" />
      </div>
      <button id="github-button">
        <img src={ gitHubIcon1 }  alt="icone do gitHub"/>
        <a href="https://github.com/guiidc">Veja mais no GitHub</a>
      </button>
      
    </div>
  )
}