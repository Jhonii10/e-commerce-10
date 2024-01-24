import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import { FaCartShopping } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Badge } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';


const activeLink = ({isActive})=> isActive ? 'active':''

const logo = (

        <div className='logo'>
            <Link to='/'>
                <h2>
                    e<span>Shop</span>.
                </h2>

            </Link>
        </div>
)

const cart = (
    <span className='cart'>
        <NavLink to='cart' className={activeLink}>
            <Badge 
                badgeContent={'0'} 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                overlap="rectangular" 
                color="error"
            >
             <FaCartShopping size={20}/>
            </Badge>
        </NavLink>
    </span>
)



const Header = () => {

    const [showMenu, setshowMenu] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = ()=>{
        setshowMenu(!showMenu)
    }

    const hideMenu = ()=>{
        setshowMenu(false)
    }

    const logoutUser = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
              toast.success('Cerrando secion')
              navigate('/');
          }).catch((error) => {
            // An error happened.
              toast.error('ocurrio un problema')
          });
    }

    return (
        <HeaderContainer>
            <div className='header' >
                {logo}

                <nav className={showMenu ? 'show-nav':'hide-nav'}>
                    <div 
                        className={showMenu ? 'nav-wrapper show-nav-wrapper':'nav-wrapper'}
                        onClick={hideMenu}
                    />
                    

                    <ul onClick={hideMenu}>
                        <li className='logo-mobile'>
                            {logo}
                            <IoCloseCircleOutline size={22} color='#fff' onClick={hideMenu}/>
                        </li>
                        <li>
                            <NavLink   
                                to={'/'} 
                                className={activeLink}
                                >
                             Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/contact'}
                                className={activeLink}
                                >
                                Contact US
                            </NavLink>
                        </li>
                    </ul>
                    
                    <div className='header-right' onClick={hideMenu}>
                        <span className='links'>
                            <NavLink to={'/login'} className={activeLink}>Login</NavLink>
                            <NavLink to={'/registro'} className={activeLink}>Register</NavLink>
                            <NavLink to={'/order-history'} className={activeLink}>My orders</NavLink>
                            <Link  onClick={logoutUser} className={activeLink} >Logout</Link>
                            
                        </span>
                        
                        {cart}
                        
                    </div>
                </nav>
                <div className='menu-icon'>
                    {cart}
                    <BiMenuAltRight size={30} onClick={toggleMenu} />
                    
                    

                </div>

            </div>
        </HeaderContainer>
    );
}

export default Header;
