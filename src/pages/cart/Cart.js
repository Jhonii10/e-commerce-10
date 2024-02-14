import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { CartContainer } from './CartContainer';
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlReload } from "react-icons/sl";



const Cart = () => {

    const {cartItems , cartTotalAmount, cartTotalQuantity} = useSelector((state)=>state.cart)
    console.table({cartItems , cartTotalAmount, cartTotalQuantity})
    return (
        <CartContainer>
            <div className='container'>
               <div className='row'>
                
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
                        <div className='col col-1'>
                        <div className='cart-list-container'>
                        <h2>Carrito De Compras</h2>
                        <div className='table-container'>
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
                        </div>
                           
                            <div className='float-left flex' >
                                <RiDeleteBin5Line/>
                                <span>vaciar carrito</span> 
                            </div>
                            <div  className='float-right '>
                            <Link to='/#products' className='flex'>
                                <SlReload/>
                                 Seguir comprando
                            </Link>
                            </div>

                        </div>
                        </div>
                         <div className='col col-2'>
                        <div className='summary'>
                            
                            <div className='cart-header'>Resumen de la cuenta</div>
                                <div className='cart-sidebar-box'>
                                    <p>Productos en el carrito: {0}</p>
                                     <div className='cart-sidebar-details'>
                                    <h4>Subtotal</h4>
                                    <h3>${cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                    </div>
                                    <p className='' >Impuestos de la compra calculados en el checkout</p>
                                    <button><span>Finalizar compra</span></button>
                                        
                                </div>
                        </div>
                        </div>
                                
                      </>
                }
                </div>
            </div>
        </CartContainer>)
}

export default Cart;
