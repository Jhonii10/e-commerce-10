import React from 'react';
import styled from 'styled-components';

 const AuthContainer = styled.div`

  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;

 `;

const Card = ({children , cardClass}) => {
    return (
        <AuthContainer className={`${cardClass}`}>
            {children}
        </AuthContainer>
    );
}

export default Card;
