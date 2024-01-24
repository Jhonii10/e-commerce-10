import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #000 #000 transparent transparent;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
  z-index: 99999;

    &:after,
    &:before {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #FF3D00 #FF3D00;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${rotateBack} 0.5s linear infinite;
    transform-origin: center center;
    }

    &:before {
    width: 32px;
    height: 32px;
    border-color: #000 #000 transparent transparent;
    animation: ${rotate} 1.5s linear infinite;
    }
}

  
  
  
`;

const Loader = () => {
    return (
        <LoaderContainer >
                <span className="loader" />
        </LoaderContainer>
    );
}

export default Loader;
