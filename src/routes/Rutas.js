import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Admin, Cart, Contact, Home, OrderHistory } from '../pages';
import { Login, Register, Reset } from '../pages/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Rutas = () => {
    return (
        <>
            
            <BrowserRouter>
                <ToastContainer/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order-history' element={<OrderHistory/>}/>

                </Routes>
                <Footer/>    
            </BrowserRouter>
        </>
    );
}

export default Rutas;
