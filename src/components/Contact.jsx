import React from 'react';
import contactIcon from '../icons/contact-icon.svg';
import gitHubIcon2 from '../icons/github-icon-2.svg';
import linkedInIcon from '../icons/linkedin-icon.svg';
import emailIcon from '../icons/email-icon.svg';
import whatsAppIcon from '../icons/whatsapp-icon.svg';
import '../css/Contact.css';

export default function Contact() {
  return (
    <div id="contact" className="container-white contact-container">
      <img src={ contactIcon } alt="icone da sessão de contato" id="contact-icon" />
        <h2>Contato</h2>
        <p><span>Telefone:</span> +55 (47) 99144-7243</p>
        <p><span>E-mail:</span> guilhermedc93@gmail.com</p>
        <div className="networks">
          <a href="https://github.com/guiidc"><img className="network-icon" src={ gitHubIcon2 } alt="icone do GitHub" /></a>
          <a href="https://www.linkedin.com/in/guilherme-da-costa-b9390320a/"><img className="network-icon" src={ linkedInIcon } alt="icone doLinkedIn" /></a>
          <a href="#contact"><img className="network-icon" src={ emailIcon } alt="icone para enviar e-mail" /></a>
          <a href="#contact"><img className="network-icon" src={ whatsAppIcon } alt="icone do WhatsApp" /></a>
        </div>
    </div>
  )
}