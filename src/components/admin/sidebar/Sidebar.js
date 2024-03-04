import React, { useState } from 'react';
import styled from 'styled-components';
import { LuUserCircle } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, Stack, SvgIcon } from '@mui/material';
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";


const SidebarContainer = styled.div`

  border-right: 1px solid #ccc;
  min-height: 80vh;

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    background: linear-gradient(0deg, gray, transparent);

  }

  nav ul {
    li {
      border-bottom: 1px solid #ccc;
   
      position: relative;
      a {
        display: block;
        width: 100%;
        color:black;
        padding: 1rem;

      }
    }
  }

.active {
  cursor: pointer;
  font-weight:700;
}

.active::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: black;
  
}


`;

const Sidebar = () => {
 

    const {userName}= useSelector((state)=>state.auth)
    const activeLink = ({ isActive }) => (isActive ? 'active' : "");
    const [open, setOpen] = useState  (null);
    const isSmallScreen = window.innerWidth < 899;


    const handleOpen = (event) => {
      setOpen(event.currentTarget);
  };
  
  const handleClose = () => {
      setOpen(null);
  };


    return (
        <>
          <IconButton size="medium" aria-label="Solar Button"
              onClick={handleOpen}
              sx={{
                 display: {xs:'inline-flex', md:'none'},
                 left: '0px',
                 top: '94px',
                 zIndex: 9,
                 width: '32px',
                 height: '32px',
                 position: 'absolute',
                 borderRadius: '0px 12px 12px 0px',
                 backgroundColor: 'red',
                 boxShadow: 'rgba(7, 141, 238, 0.24) 0px 8px 16px 0px',
                 color: 'rgb(255, 255, 255)',
                }}  
                >
                    <SvgIcon >
                        <TbLayoutSidebarLeftExpand/>
                    </SvgIcon>
                </IconButton>

                    {
                      <Drawer
                      open={Boolean(open)}
                      onClose={handleClose}
                      anchor='left'
                      >
                      <MenuOptions
                        activeLink={activeLink}
                        isSmallScreen={isSmallScreen}
                        handleClose={handleClose}
                        userName={userName}

                      />
                      </Drawer> 
                    }
        
                    <Stack 
                    sx={{
                        display: {xs:'none', md:'flex'},
                        flexDirection: 'column',
                        height: '100%',
                        flexshrink: 0,
                        width: '280px',
                        borderRight: '1px solid rgba(145, 158, 171, 0.2)',
                        transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        }}> 
                      <MenuOptions
                          activeLink={activeLink}
                          isSmallScreen={isSmallScreen}
                          handleClose={handleClose}
                          userName={userName}

                      />     
                    </Stack>
        
        </>
    );
}

export default Sidebar;


const MenuOptions = ({activeLink , isSmallScreen , handleClose , userName})=>{
  return (
    <SidebarContainer>
            <div className='user'>
             <LuUserCircle size={40}/>
              <h3>{userName}</h3>
            </div>
            <nav>
             <ul>
                <li>
                   <NavLink to={'/admin/home'} className={activeLink} onClick={ () => {isSmallScreen && handleClose()}}>
                    Inicio administrador
                    </NavLink>
                </li>
                <li>
                <NavLink to={'/admin/products'} className={activeLink} onClick={ () => {isSmallScreen && handleClose()}}>
                    Productos
                </NavLink>
                    
                </li>
                <li>
                <NavLink to={'/admin/add-products/add'} className={activeLink} onClick={ () => {isSmallScreen && handleClose()}}>
                    Agregar productos
                </NavLink>
                    
                </li>
                <li>
                <NavLink to={'/admin/orders'} className={activeLink} onClick={ () => {isSmallScreen && handleClose()}}>
                    Pedidos
                </NavLink>
                </li>
             </ul>
            </nav>
        </SidebarContainer>
  )
}
