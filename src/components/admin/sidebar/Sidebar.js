import React from 'react';
import styled from 'styled-components';
import { LuUserCircle } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


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

    return (
        <SidebarContainer>
            <div className='user'>
             <LuUserCircle size={40}/>
              <h3>{userName}</h3>
            </div>
            <nav>
             <ul>
                <li>
                   <NavLink to={'/admin/home'} className={activeLink}>
                    Inicio administrador
                    </NavLink>
                </li>
                <li>
                <NavLink to={'/admin/products'}>
                    Productos
                </NavLink>
                    
                </li>
                <li>
                <NavLink to={'/admin/add-products'}>
                    Agregar productos
                </NavLink>
                    
                </li>
                <li>
                <NavLink to={'/admin/orders'}>
                    Pedidos
                </NavLink>
                </li>
             </ul>
            </nav>
        </SidebarContainer>
    );
}

export default Sidebar;
