import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por {'    '}
        <a href="https://linkedin.com/in/lenon-soares-389394150/">
        {/* <a href="https://linkedin.com/in/lenon-soares-389394150/" target="_blank"> */}
          Lenon Dev 
        </a> {'    '}
        durante a
        {'  '}
        {/* <a href="https://www.alura.com.br/" target="_blank"> */}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
