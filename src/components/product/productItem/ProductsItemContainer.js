import styled from 'styled-components';

export const ProductsItemContainer = styled.div`

&.grid-item {
    background: #fff none repeat scroll 0 0;
    margin: 0 5px;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ddd;

    &:hover{
        border: 1px solid #0d2f64;

        
        ${'' /* .image{
            .item-action {
                opacity: 1;
                visibility: visible;
            }
        } */}
    }


    .image{
        position: relative;
        overflow: hidden;

        
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;



    img {
        width: 90%;
        transform: scale(1);
        transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.08);
          }

    }
    
    }
   }

   .content-item {
    
    text-align: center;
    position: relative;
    padding: 0px 0px 20px;
    transition: all 0.3s ease 0s;

    .details {
      padding: 0 1rem;
      
      h3 {
        font-size: 16px;
        font-weight: bold;
        line-height: 128%;
        margin: 0;
        padding: 0 10px;
        color: #222;
        height: 42px;
        overflow: hidden;
      }
      p {
        color: #c00;
        font-size: 18px;
        margin: 0;
        font-weight: 700;
        line-height: 100%;
      }
    }
    

    
  }

  }

  .item-action{
        padding:12px;
        ${'' /* transition: all 0.1s ease;
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
        bottom: 10%;
        opacity: 0;
        visibility: hidden;
        z-index: 9; */}


        button {
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
            width: 154px;
            cursor: pointer;

            span{
                padding: 10px 30px;
                font-size: 14px;
                font-weight: 600;
                display: block;
                border-radius: 5px !important;
                padding: 10px 15px;
                color: #fff;
                transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    
            }
    }
    }


 


&.list {
  width: 100%;
  height: 14rem;
  max-height: 32rem;
  display: flex;
  
  background-color: #fff;
  margin: 1rem 0;
  .img {
    padding: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-right: 2px solid #eee;

    img {
      
      width: 100%;
      max-height: 100%;
      cursor: pointer;
    }
  }

  &.content {
    position: relative;
    padding: 1rem;
    width: 65%;
    .details {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      h4 {
        font-weight: 400;
      }
      p {
        font-weight: 500;
        color: var(--color-danger);
      }
    }
    button {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }
  }

  .content-item {
    
    text-align: left;
    position: relative;
    padding: 12px;
    transition: all 0.3s ease 0s;

    .details {
      padding: 0 1rem;
      
      h3 {
        font-size: 16px;
        font-weight: bold;
        line-height: 128%;
        margin: 0;
        color: #222;
        height: 42px;
        overflow: hidden;
      }

      
      p {
        color: #c00;
        font-size: 18px;
        margin: 0;
        font-weight: 700;
        line-height: 100%;
      }
    }
    .desc{
            padding: 0 1rem;
        }

    
  }
}

`;