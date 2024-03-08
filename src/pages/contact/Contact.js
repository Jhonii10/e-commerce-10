import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Contact = () => {
    return (
        <ContactContainer>
            <div className='container'>
                <h2>Contactanos</h2>
                <div className='row'>
                    <div className='col col-1 '>
                        <div className='cart-list-container'>
                            <div className='section'>
                                <form>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre"
                                        required
                                    />
                                    
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Correo electrónico"
                                        required
                                    />
                                    
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Asunto"
                                        required
                                    />
                                    
                                    <textarea name="message" cols="30" rows="8" placeholder='Mensaje'></textarea>
                                    <button><span>Enviar</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                <div className='col col-2 '>
                    <div className='cart-list-container'>
                    <h3>Nuestra información de contacto</h3>
                    <p>Complete el formulario o contáctenos a través de otros canales que se enumeran acontinuación.</p>
                    <div className='icons'>
                        <span>
                        <FaPhoneAlt />
                        <p>+57 310 141 6545</p>
                        </span>
                        <span>
                        <FaEnvelope />
                        <p>atencionalcliente@eshop.com</p>
                        </span>
                        <span>
                        <GoLocation/>
                        <p>Cali, Colombia</p>
                        </span>
                        <span>
                        <FaTwitter />
                        <p>@eshop</p>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </ContactContainer>
    );
}

export default Contact;

const ContactContainer = styled.div`

    .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
            padding-bottom: 24px;
            padding-top: 24px
        }

        img{
            max-width:100%;
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
        flex: 0 0 50%;
        max-width: 50%;

        }

        .col-2{
        flex: 0 0 50%;
        max-width: 50%;

        }

        } 

        .cart-list-container{
        padding: 40px 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        }

  .icons {
      margin: 0.875rem 0;
      span {
        display: flex;
        justify-content: start;
        align-items: center;
        gap:4px;
        a,
        p {
          margin-left: 5px;
        }
      }
    }

  .section {
        padding:0 12px 0 12px;
        form {
        width: 100%;
        max-width: 100%;
        margin-right: 1rem;
        margin-bottom: 1rem;
        
        input[type="text"],
        input[type="number"],
        input[type="file"],
        input[type="email"],
        select,
        textarea,
        input[type="password"] {
            display: block;
            font-size: 0.875rem;
            padding: 0.5rem;
            margin: 1rem auto;
            width: 100%;
            max-width: 100%;
            border: 1px solid #777;
            border-radius: 3px;
            outline: none;
        }
        textarea{
            min-height:124px;
        }
        
        }
    }

  button {
            margin-top: 5px;
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
            cursor: pointer;

            span{
                padding: 10px 30px;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Quicksand';
                display: block;
                border-radius: 5px !important;
                padding: 12px 24px;
                color: #fff;
                transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    
            }
    }


@media screen and (max-width: 768px) {
  .contact {
    .section {
      flex-direction: column;
    }
  }

  .row{
    .col-1{
    flex: 0 0 100%;
    max-width: 100%;
    }

    .col-2{
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 12px;

    }
    }

    .icons {
      span {
        p {
          font-size:0.875rem;
        }
      }
    }
    
}




`;