import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CheckoutDetails, Footer, Header } from '../components';
import { Admin, Cart, Checkout, Contact, Home, OrderDetails, OrderHistory, ReviewProduct } from '../pages';
import { Login, Register, Reset } from '../pages/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from '../components/adminOnlyRoute/AdminOnlyRoute';
import { useSelector } from 'react-redux';
import ProductsDetails from '../components/product/productDetails/ProductsDetails';
import { CheckoutSuccess } from '../components/checkout';

const Rutas = () => {

    const {email, isLoggedIn} = useSelector((state)=>state.auth);
    const {cartItems} = useSelector((state)=>state.cart)
    const isAdmin = isLoggedIn && email === 'jhoni@gmail.com';

    return (
        <>
            
            <BrowserRouter>
                <ToastContainer/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
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

                    {
                        isAdmin &&
                        <Route 
                        path='/admin/*' 
                        element={
                            <AdminOnlyRoute>    
                                <Admin/>
                            </AdminOnlyRoute>
                        }
                        
                    />
                    }

                    {/* <Route path='/*' element={<Navigate to='/'/>}/> */}

                    <Route path='/product-details/:id' element={<ProductsDetails/>}/>

                </Routes>
                <Footer/>    
            </BrowserRouter>
        </>
    );
}

export default Rutas;
