import styled from 'styled-components';

 export const AddProductContainer = styled.div`

  .card {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
  }
  form {
    label {
      display: block;
      font-size: 1rem;
      font-weight: 500;
    }
    input[type="text"],
    input[type="number"],
    input[type="file"],
    input[type="email"],
    select,
    textarea,
    input[type="password"] {
      display: block;
      font-size: 0.8rem;
      font-weight: 300;
      padding: 1rem;
      margin: 1rem auto;
      width: 100%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }


    .progress {
      background-color: #aaa;
      border: 1px solid transparent;
      border-radius: 10px;
      .progress-bar {
        background-color: var(--light-blue);
        border: 1px solid transparent;
        border-radius: 10px;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        padding: 0 1rem;
      }
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

        .btn-black {
            color: #fff;
            background: #000;
        }




`;
