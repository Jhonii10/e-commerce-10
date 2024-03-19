import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`

  background-color: black;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8rem;

  p{
    color: #fff;
    margin: 0;
    font-size: 14px;
  }
  
  a{
    color:#fff;
    font-size: 14px;
  }

`;

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <FooterContainer>
            <p> Copyright &copy; {year} - Prohibida la reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita del titular.</p>
            <p> Contruido por - <a href='https://www.jhoniipia.com/'>Jhoni ipia </a> </p>
        </FooterContainer>
    );
}

export default Footer;
