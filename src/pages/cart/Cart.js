import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { CartContainer } from './CartContainer';
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlReload } from "react-icons/sl";
import { ADD_TO_CART, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, SAVE_URL } from '../../redux/slice/cartSlice';



const Cart = () => {

    const {cartItems , cartTotalAmount, cartTotalQuantity} = useSelector((state)=>state.cart)
    const {isLoggedIn}=useSelector((state)=>state.auth)

    
    const dispatch = useDispatch();
    const navigate = useNavigate();




    const increaseCart = (cart)=>{
        dispatch(ADD_TO_CART(cart))
    }

    const decreaseCart = (cart) => {
        dispatch(DECREASE_CART(cart))
    }

    const deleteCart = (cart)=>{
        dispatch(REMOVE_FROM_CART(cart))
    }

    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL())
        dispatch(CALCULATE_TOTAL_QUANTITY())
        dispatch(SAVE_URL(''))
    }, [dispatch , cartItems]);

    const url = window.location.href;
    
    const checkout = ()=>{
        if (isLoggedIn) {
            navigate('/checkout')
        } else {
            dispatch(SAVE_URL(url))
            navigate('/login')
        }
    }


    return (
        <CartContainer>
            <div className='container'>
               <div className='row'>
                
                {
                    cartItems.length === 0
                    ? <>
                        <p>No hay productos en el carrito.</p>
                        <br/>
                        <div>
                            <Link to={'/#productos'}>
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
                                                        <button className='quantity-circle' onClick={()=>decreaseCart(cart)}>
                                                            <AiOutlineMinus size={25} />
                                                        </button>
                                                        <div className='product-cart-row-quantity'>
                                                            <span>{cartQuantity}</span>
                                                        </div>
                                                        <button className='quantity-circle' onClick={()=>increaseCart(cart)}>
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
                                                    <MdDelete size={22} color='red' cursor='pointer' onClick={()=>deleteCart(cart)}/>
                                                </td>
                                            </tr>
                                        
                                    )
                                }) 
                            }
                                    
                            </tbody>
                        </table>
                        </div>
                           
                            <div className='float-left flex' onClick={()=>dispatch(CLEAR_CART())}  >
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
                                    <p>Productos en el carrito: {cartTotalQuantity}</p>
                                     <div className='cart-sidebar-details'>
                                    <h4>Subtotal</h4>
                                    <h3>${cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                    </div>
                                    <p>Impuestos de la compra calculados en el checkout</p>
                                    <button
                                        onClick={checkout}
                                        >
                                        <span>Finalizar compra</span>
                                    </button>
                                        
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
