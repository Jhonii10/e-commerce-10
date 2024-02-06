import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  text-align: center;
 

&.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;

  &:after{
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #FF3D00;
  border-left: 4px solid transparent;

}
}


`;


const Loading = () => {
    return (
        <Loader className='loader'/>
    );
}

export default Loading;
