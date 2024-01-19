import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Admin, Cart, Contact, Home, OrderHistory } from '../pages';

const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/orderhistory' element={<OrderHistory/>}/>
                </Routes>
                <Footer/>    
            </BrowserRouter>
        </>
    );
}

export default Rutas;
