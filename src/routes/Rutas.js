    import React from 'react';
    import {  Navigate, Route, Routes, useLocation } from 'react-router-dom';
    import { CheckoutDetails, Footer, Header } from '../components';
    import { Admin, Cart, Checkout, Contact, Error404, Home, OrderDetails, OrderHistory, ReviewProduct } from '../pages';
    import { Login, Register, Reset } from '../pages/auth';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import AdminOnlyRoute from '../components/adminOnlyRoute/AdminOnlyRoute';
    import { useSelector } from 'react-redux';
    import ProductsDetails from '../components/product/productDetails/ProductsDetails';
    import { CheckoutSuccess } from '../components/checkout';

    const Rutas = () => {
        const {cartItems} = useSelector((state)=>state.cart)

        const persistedState = JSON.parse(localStorage.getItem('auth'));
        const isAdmin = persistedState?.email === process.env.REACT_APP_ADMIN_USER && persistedState?.isLoggedIn ? true : false;

        const location = useLocation();
        const show = location.pathname !== '/404' 
    
        return (
            <>
                    <ToastContainer/>

                    {show && <Header />}
                    
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Register />} />
                        <Route path="/reset" element={<Reset />} />
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/order-history' element={<OrderHistory/>}/>
                        <Route path='/order-details/:id' element={<OrderDetails/>}/>
                        <Route path='/review-products/:id' element={<ReviewProduct/>}/>

                        <Route
                                path="/checkout"
                                element={cartItems.length > 0 ? <CheckoutDetails/> : <Navigate to="/cart" />}
                        />

                        <Route path='/checkout/payment' element={<Checkout/>}/>
                        <Route path='/checkout/payment-success' element={<CheckoutSuccess/>}/>
                        <Route path='/product-details/:id' element={<ProductsDetails/>}/>

                        {
                            isAdmin && (
                            <Route 
                            path='/admin/*'
                            element={
                                <AdminOnlyRoute>    
                                    <Admin/>
                                </AdminOnlyRoute>
                            }
                            
                        />)
                        }

                        <Route path='*' element={<Navigate to='404' />}/>
                        <Route path='/404' element={<Error404/>}/>

                    </Routes>
                    {show && <Footer/>}       
            </>
        );
    }

    export default Rutas;
