import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled from 'styled-components';

const CheckoutSummary = () => {

    const [showList, setShowList] = useState(false);
    const lista = [1,2,3]

    return (
        <CheckoutSummaryContainer>
        <div className='card'>
        <div className='step-header'>Resumen de compra</div>
        <div className='checkout-sidebar-box'>
          <div className='show-cart' onClick={()=>setShowList(!showList)}>
            <div className='order-summary'>  
                <span>
                <FaCartShopping size={15}/>
                Resumen del pedido
                <MdOutlineKeyboardArrowDown size={20}/>
                </span>               
                <strong >$54.000</strong>
            </div>
          </div>
          <div className={`summary-cart ${showList ? 'active' : ''}`} >
            {
                lista.map((item)=>(
                    <div className='cart-list-product'>
                        <div className='cart-img'>
                            <img src='' alt='silla'/>
                        </div>
                        <div className='item-data'>
                            <div class="item-title-cart">Silla Rimax Barú Con Brazos Gris Hielo</div>
                            <p class="item-price">
                                $54.000
                            </p>
                        </div>
                        <div class="resume-qty">1</div>
                        
                    </div>
                ))
            }

          </div>

          <div id="cart-shipment-box">
        <div className="cart-subtotal-details ">
            <span className="shipment-text">Subtotal</span>{" "}
            <small>
            <span>$50.000</span>
            </small>
        </div>
        <div className="cart-iva-details ">
            <span >IVA</span>{" "}
            <small >
            <span>$4000</span>
            </small>
        </div>
        <div className="cart-total-details ">
            <span>Total</span>
            <strong>$54000</strong>
        </div>
        </div>

        </div>
        </div>   
        </CheckoutSummaryContainer>
    );
}

export default CheckoutSummary;


const CheckoutSummaryContainer = styled.div`

.card {
            margin: 0 0 -1px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;

            .step-header {
                text-align: center;
                background: #ededed;
                background: linear-gradient(0deg, #ededed 0%, whitesmoke 100%);
                padding: 16px;
                color: #3f3f3f;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 100%;
                border-bottom: 1px solid #ddd;
            }

            .card-body {
                flex: 1 1 auto;
                min-height: 1px;
                padding: 1.25rem;

            }

            
    }

.checkout-sidebar-box {
    background: #fff none repeat scroll 0 0;
    padding: 30px 30px 20px 30px;

    .show-cart{
        background: linear-gradient(to bottom, #f3f3f3 0%, #ebebeb 100%);
        border: 1px solid #ddd;
        padding-top: 15px;
        padding-bottom: 15px;
        padding: 0.5rem 1rem;
        font-size: 14px ;
        color: #222;    
        cursor: pointer;
        line-height: 1.5;
        border-radius: 0.3rem;

    }
}

.order-summary{
    display: flex;
    align-items: center;
    white-space: normal;
    justify-content: space-between;
    span {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    svg {
        vertical-align: middle; 
    }
}


.summary-cart{
    max-height: 300px;
    overflow-y: auto;
    border-bottom: 1px solid #eee;
    display:none;
}

.active {
  display: block;
}

.cart-list-product {
    border-bottom: 1px solid #eee;
    overflow: hidden;
    padding: 10px 15px;
    position: relative;
    display: flex;
    align-items: center;

    .cart-img {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 2px;
    float: left;
    margin: 0;
    position: relative;
    min-width: 70px;
        img {
        -o-object-fit: scale-down;
        object-fit: scale-down;
        height: 70px;
        width: 70px;
        transform-style: preserve-3d;   
    }
    }

    .item-data {
    padding: 0 15px;
    }

    .resume-qty {
    background: #336699;
    color: #fff;
    padding: 4px 8px;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    border-radius: 5px;
    margin-left: auto;
    }

    .item-title-cart {
    color: #666;
    font-size: 13px;
    line-height: 125%;
    margin: 0 0 5px 0;
    }

    .item-price {
    margin: 0;
    color: #b53238;
    font-size: 14px;
    font-weight: bold;
    line-height: 100%;
   }
}


.cart-subtotal-details {
    padding: 7px 5px;
    font-size: 14px;

    small{
    float: right;
    color: #999;
    font-size: 14px;
    font-weight: 400;

    }

    .shipment-text{
        font-weight: 600
    }
}

.cart-iva-details {
    padding: 7px 5px;
    font-size: 12px;
    border-bottom: 1px solid #ebebeb;

    small{
    float: right;
    color: #999;
    font-size: 14px;
    font-weight: 400;

    }

    .shipment-text{
        font-weight: 600
    }
}

.cart-total-details {
    padding: 10px 5px 15px 5px;
    span {
    font-weight: 600;
    display: block;
    float: left;
    padding-top: 3px;
    font-size: 16px;
}
    strong {
    font-size: 20px;
    color: #b53238;
    float: right;    
    }
    &:after {
    content: "";
    display: table;
    clear: both;
}
}

@media screen and (max-width: 999px) {

.card{
    margin-top: 12px;
}

}

`;