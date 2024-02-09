import styled from "styled-components";

export const ProductosContainer = styled.section`

  width: 100%;
  padding: 4rem 0;

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 12px;
}

.product {
  display: flex;
  position: relative;

  .filter {
    width: 20%;
    transition: all 0.3s;
  }

  .content {
    width: 80%;
    padding-left: 5px;
    position: relative;
    .icon {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;

      & > * {
        padding-left: 5px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .filter {
      width: 60%;
      background-color: #fff;
      border: 1px solid black;
      position: absolute;
      left: -200%;
      padding: 1rem;
      z-index: 99;
    }
    .show {
      left: 0;
    }
    .content {
      width: 100%;
      .icon {
        display: flex;
      }
    }
  }
}

`;
