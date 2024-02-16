import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout, Footer, Header } from '../components';
import { Admin, Cart, Contact, Home, OrderHistory } from '../pages';
import { Login, Register, Reset } from '../pages/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from '../components/adminOnlyRoute/AdminOnlyRoute';
import { useSelector } from 'react-redux';
import ProductsDetails from '../components/product/productDetails/ProductsDetails';

const Rutas = () => {

    const {email, isLoggedIn} = useSelector((state)=>state.auth);
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
                    <Route path='/checkout' element={<Checkout/>}/>

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
