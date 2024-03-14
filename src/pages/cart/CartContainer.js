import styled from 'styled-components';

export const CartContainer = styled.section`

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 24px;
  padding-top: 24px
}

.row {

    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  
  .col{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

  }
  
  .col-1{
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;

  }

  .col-2{
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;

  }
 

  .table-container{
    display:flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    overflow-x: auto;
    gap:12px;

  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;

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


  .cart-list-container{
    padding: 40px 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    .float-left{
      float:left;
      cursor: pointer;
      
    }
    .float-right{
      float:right;
      a{
        color: #212529;
        background-color: #ffc107;
        padding: 0.25rem 0.5rem;
        font-size: 13px;
        cursor: pointer;
        border-radius: 0.2rem;
      }
    }

    .flex{
      display:flex;
      align-items: center;
      gap:4px;
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

.summary {
    
    background-clip: border-box;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 1.5rem;

      .cart-header {
        background: linear-gradient(0deg, #ededed 0%, whitesmoke 100%);
        padding: 16px;
        text-transform: capitalize;
        border-bottom: 1px solid #ddd;
        font-weight: 700;
        color: #3f3f3f;
        font-size: 100%;
        text-align:center;
      }


      .cart-sidebar-box {
          font-size: 13px;
          background: #fff none repeat scroll 0 0;
          padding: 30px 20px 40px 20px;

          .cart-sidebar-details{
            padding: 5px;
            border-bottom: 1px solid #ebebeb;
            display:flex;
            justify-content: space-between;
          }
      }
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      button {
        margin-top: 5px;
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
            width: 100%;
            cursor: pointer;

            span{
                padding: 10px 30px;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Quicksand';
                display: block;
                border-radius: 5px !important;
                padding: 10px 15px;
                color: #fff;
                transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    
            }
    }

    }

    .cart-emplit{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width:100%;
      height: 58vh;
      padding: 50px 20px;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;

      p{
        font-size: 20px;
        line-height: 22px;
        color: #888;
        font-weight: 500;
      }

      .btn {
        margin-top: 5px;
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
            width: 148px;
            cursor: pointer;

            span{
                padding: 10px 30px;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Quicksand';
                display: block;
                border-radius: 5px !important;
                padding: 10px 15px;
                color: #fff;
                transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    
            }
      }
    }




    @media screen and (max-width: 999px) {

    .row{
      .col-1{
      flex: 0 0 100%;
      max-width: 100%;
      }

      .col-2{
        flex: 0 0 100%;
        max-width: 100%;
        

      }

      .cart-list-container {
    padding: 40px 10px;
      }

    }

    .summary{
           margin-left: 0;
           margin-top: 12px
    }

    .container{
      padding: 12px 12px 12px 12px;
      h2{
        text-align: center;
      }
    } 
      
    }

    


`;

