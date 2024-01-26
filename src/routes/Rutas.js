import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Admin, Cart, Contact, Home, OrderHistory } from '../pages';
import { Login, Register, Reset } from '../pages/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from '../components/adminOnlyRoute/AdminOnlyRoute';
import { useSelector } from 'react-redux';

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

                    <Route path='*' element={<Navigate to='/'/>}/>

                </Routes>
                <Footer/>    
            </BrowserRouter>
        </>
    );
}

export default Rutas;
