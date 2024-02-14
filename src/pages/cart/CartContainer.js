import styled from 'styled-components';

export const CartContainer = styled.section`

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.table {
  padding: 5px;
  width: 100%;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;

    thead {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
    }

    th {
      border: 1px solid #eee;
    }

    th,
    td {
      
      text-align: center;
      padding: 8px;
      &.icons {
        > * {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }

    .flex{
      display: flex;
      justify-content: center;
      img{
        border-radius: 10px;
        filter: brightness(1.1);
        mix-blend-mode: multiply;
      }
    }

    .item-price{
      div{
        color: #3f3f3f;
        font-weight: 500;
        font-size: 14px;
        line-height: 125%;
        overflow: hidden;
        margin: 0 0 7px 0;
      }
      p{
        margin: 0;
        color: #c00;
        font-size: 15px;
        font-weight: bold;
        line-height: 100%;
      }
    }

    tr {
      border-bottom: 1px solid #ccc;
    }

  }
  .summary {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: start;

    .card {
      padding: 1rem;
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      button {
        margin-top: 5px;
      }
    }
  }
}
.count {
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: auto;
  
  .quantity-circle {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: #fff;
    cursor: pointer;
    opacity: 1;
    border-radius: 50%;
    background: #8e0808;
    border: 1px solid #8e0808;
    padding: 2px; 
    
}

.product-cart-row-quantity {
    padding: 0 7px;
    height: 28px;
    font-size: 12px;
    color: #333;
    margin: 0 4px;
    font-weight: 700;
    text-align: center;
    line-height: 28px;
    background: #f3f3f3;
    border-radius: 5px;
}
  
 
}

`;

