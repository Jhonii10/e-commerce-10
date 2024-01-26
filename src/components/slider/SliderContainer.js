import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  0% {
    visibility: visible;
    top: 23rem;
  }
  100% {
    visibility: visible;
    top: 10rem;
  }
`;



export const SliderContainer = styled.div`
  
  &.slider {
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}

@media screen and (min-width: 600px) {
  .slide {
    img {
    width: 100%;
    height: 100%;
    
  }
 }

}

.slide{
    img
    {
        height: 100%;
        object-fit: cover;

    }
  
}

    .content {
  position: absolute;
  text-align: center;
  top: 23rem;
  left: 50%;
  opacity: 0;
  width: 50%;
  padding: 2rem;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 1s ease 0.5s;
  animation-fill-mode: forwards;
  h2 {
    font-size: 2.5rem;
  }
}


@media screen and (max-width: 768px) {
  .content {
    width: 73%;
    padding: 1rem;
    h2 {
    font-size: 1.5rem;
  }
  }
}

@media screen and (min-width: 1024px) {
  .content {
    width: 50%;
    padding: 1rem;
    h2 {
    font-size: 3.5rem;
  }
  }
}

.content > * {
  color: #fff;
  margin-bottom: 1rem;
}

.current {
  opacity: 1;
  transform: translateX(0);
}

.current .content {
  opacity: 1;
}
.arrow {
  border-radius: 50%;
  background: transparent;
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.arrow:hover {
  background: #fff;
}

.next {
  right: 1.5rem;
  color: orangered;
}
.prev {
  left: 1.5rem;
  color: orangered;
}

hr {
  height: 2px;
  background: #fff;
  width: 50%;
}

.btn {
        font-size: 1rem;
        font-weight: 400;
        padding: 6px 8px;
        margin: 0 5px 0 0;
        border: 1px solid transparent;
        border-radius: 3px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        }

        .btn-primary {
            color: #fff;
            background: #007bff;
        }

`;
