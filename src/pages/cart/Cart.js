import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { CartContainer } from './CartContainer';
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";



const Cart = () => {

    const {cartItems , cartTotalAmount, cartTotalQuantity} = useSelector((state)=>state.cart)
    console.table({cartItems , cartTotalAmount, cartTotalQuantity})
    return (
        <CartContainer>
            <div className='container table'>
                <h2>Tu Lista De Compras</h2>
                {
                    cartItems.lenght === 0
                    ? <>
                        <p>No hay productos en el carrito.</p>
                        <br/>
                        <div>
                            <Link to={'/#products'}>
                                &larr; Continuar Comprando
                            </Link>
                        </div>
                      </>
                    : <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Opciones</th>

                                </tr>
                            </thead>
                            <tbody>
                            {
                                cartItems.map((cart, index)=>{
                                    const {id , name , price, imageUrl, cartQuantity} = cart;

                                    return (
                                        
                                            <tr key={id}>
                                                <td>{index + 1}</td>
                                                <td className='flex'>
                                                    <img src={imageUrl} alt={name} style={{ width: "100px" }}/>
                                                </td>
                                                <td className='item-price'>
                                                <div>
                                                        {name}
                                                </div>  
                                                <p>
                                                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                </p>
                                                </td>
                                                <td>
                                                    <div className='count flex'>
                                                        <button className='quantity-circle'>
                                                            <AiOutlineMinus size={25} />
                                                        </button>
                                                        <div className='product-cart-row-quantity'>
                                                            <span>{cartQuantity}</span>
                                                        </div>
                                                        <button className='quantity-circle'>
                                                            <AiOutlinePlus size={25}/>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className='item-price'>
                                                    <p>
                                                    ${(cartQuantity * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    </p>
                                                </td>
                                                <td>
                                                    <MdDelete size={22} color='red'/>
                                                </td>
                                            </tr>
                                        
                                    )
                                }) 
                            }
                                    
                            </tbody>
                        </table>
                      </>
                }
            </div>
        </CartContainer>)
}

export default Cart;
