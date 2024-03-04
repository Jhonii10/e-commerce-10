import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { AddProducts, Home, Orders, Products, Sidebar } from '../../components/admin';



const AdminContainer = styled.div`

    display:flex;

    .navbar{
      
    }

    .content {
        width: 100%;
        padding: 1rem;
    }

`;

const Admin = () => {


    return (
        <AdminContainer>
            <div className='navbar'>
                <Sidebar/>
            </div>
            <div className='content'>
                <Routes>
                    <Route path='home' element={<Home/>}/>
                    <Route path='add-products/:id' element={<AddProducts/>}/>
                    <Route path='products' element={<Products/>}/>
                    <Route path='orders' element={<Orders/>}/>
                    <Route path='*' element={<Navigate to={'home'}/>}/>
                </Routes>
            </div>

        </AdminContainer>
    );
}

export default Admin;
