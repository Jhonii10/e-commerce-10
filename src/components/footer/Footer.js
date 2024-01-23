import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`

  background-color: black;
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;

  p{
    color: #fff;
  }


`;

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <FooterContainer>
            <p> &copy; {year} All Rights Reserved </p>
        </FooterContainer>
    );
}

export default Footer;
