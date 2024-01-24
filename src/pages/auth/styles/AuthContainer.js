import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(-5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const AuthContainer = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;

  .container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}



  .img {
    animation: ${slideDown} 0.5s ease;
  }

  .form {
    width: 400px;
    padding: 1.5rem;
    animation: ${slideUp} 0.5s ease;
    
    h2 {
      color: var(--color-danger);
      text-align: center;
    }

    form {
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        display: block;
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem;
        margin: 1rem auto;
        width: 100%;
        border: 1px solid #777;
        border-radius: 3px;
        outline: none;

        
      }

      .links {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
      }

      p {
        text-align: center;
        margin: 1rem;
      }
 
    }

    .register {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    }

    
  }
  @media screen and (max-width: 800px) {
    .img {
      display: none;
    }

  }
  
  @media screen and (max-width: 450px) {
    .form {
        width: auto;
    }
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

        .btn-danger {
        color: #000;
        background: white;
        border: 1px solid black;
        }

        .btn-block {
        width: 100%;
        }

`;
