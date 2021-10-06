import React from 'react';
import contactIcon from '../icons/contact-icon.svg';
import gitHubIcon2 from '../icons/github-icon-2.svg';
import linkedInIcon from '../icons/linkedin-icon.svg';
import emailIcon from '../icons/email-icon.svg';
import whatsAppIcon from '../icons/whatsapp-icon.svg';
import '../css/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
  AOS.init({ duration: 1000 })
  return (
    <div id="contact" className="container-white contact-container">
      <img data-aos="zoom-out" src={ contactIcon } alt="icone da sessão de contato" id="contact-icon" />
        <h2 data-aos="zoom-out">Contato</h2>
        <p data-aos="fade-left"><span>Telefone:</span> +55 (47) 99144-7243</p>
        <p data-aos="fade-right"><span>E-mail:</span> guilhermedc93@gmail.com</p>
        <div className="networks">
          <a data-aos="flip-right" data-aos-offset="20" href="https://github.com/guiidc"><img className="network-icon" src={ gitHubIcon2 } alt="icone do GitHub" /></a>
          <a data-aos="flip-left" data-aos-offset="20" href="https://www.linkedin.com/in/guilherme-da-costa-b9390320a/"><img className="network-icon" src={ linkedInIcon } alt="icone doLinkedIn" /></a>
          <a data-aos="flip-right" data-aos-offset="20" href="#contact"><img className="network-icon" src={ emailIcon } alt="icone para enviar e-mail" /></a>
          <a data-aos="flip-left" data-aos-offset="20" href="#contact"><img className="network-icon" src={ whatsAppIcon } alt="icone do WhatsApp" /></a>
        </div>
    </div>
  )
}