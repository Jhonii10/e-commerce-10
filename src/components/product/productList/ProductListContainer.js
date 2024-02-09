import styled from "styled-components";

export const ProductListContainer = styled.div`

  width: 100%;

  .top {
    width: 100%;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      & > * {
        margin-right: 7px;
        cursor: auto;
      }
    }

    .sort {
      label {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 5px;
      }
      select {
        font-size: 1rem;
        font-weight: 300;
        border: none;
        // border-bottom: 1px solid #777;
        outline: none;
      }
    }
  }

  .grid {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -0.5rem;
    justify-content: center;
    margin-top: 1rem
    }

    .gcol{
        flex-basis: 30%;
        max-width: 30%;
        margin-bottom: 10px; 
    }


  @media screen and (max-width: 800px) {
    .top {
      flex-direction: column;
      align-items: start;
      padding-bottom: 5px;
    }
    .search {
      width: 100%;
    }

    .grid {
    flex-flow: row wrap;
    margin: 0 -0.5rem;
    justify-content: center;
    margin-top: 1rem
    }

    .gcol{
        flex-basis: 30%;
        max-width: 30%;
        margin-bottom: 10px; 
    }

    @media screen and (max-width: 768px) {
    .gcol {
            flex-basis: 48%; 
            max-width: 48%;
        }
    }

    ${'' /* @media screen and (max-width: 380px) {
    .gcol {
        flex-basis: 100%; 
        max-width: 100%;
    }} */}

    

  }


    



`;
