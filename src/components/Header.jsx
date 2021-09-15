import React, { Component } from 'react';
import '../css/Header.css';
import menuIcon from '../icons/menu-icon.svg'
import closeMenuIcon from '../icons/close-menu-icon.svg'
import heroImage from '../images/hero-bg.jpg'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navStatus: null,
    }
  }

  handleClick = () => {
    const { navStatus } = this.state;
    if (navStatus) {
      this.setState({ navStatus: null});
      return;
    }
    this.setState({ navStatus: 'active'});
  }

  render() {
    const { navStatus } = this.state;
    return (
      <>
      <div className="header-container">
        <div className="header-wrapper">
          <h2 id='logo'>Guilherme C.</h2>
          <img
            id="menu-hamburger"
            src={ navStatus ? closeMenuIcon : menuIcon }
            alt="menu-mobile-icon"
            className="menu-mobile-icon"
            onClick={ this.handleClick }
          />
        </div>
        <nav id="nav" className={ navStatus }>
          <ul id="menu">
            <li><a onClick={ this.handleClick } href="#home">Home</a></li>
            <li><a onClick={ this.handleClick } href="#about">Sobre</a></li>
            <li><a onClick={ this.handleClick } href="#projects">Projetos</a></li>
            <li><a onClick={ this.handleClick } href="#technologys">Tecnologias</a></li>
            <li><a onClick={ this.handleClick } href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </>
    )
  }
}

export default Header;
