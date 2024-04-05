import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import { FaCartShopping } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Badge } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import { ShowOnLogIn, ShowOnLogout } from '../hiddenLink/HiddenLink';
import { CALCULATE_TOTAL_QUANTITY } from '../../redux/slice/cartSlice';
import { SiShopee } from "react-icons/si";
import Account from './Account';
import { Helmet } from 'react-helmet';


const activeLink = ({isActive})=> isActive ? 'active':''


const logo = (

        <div className='logo'>
            <Link to='/'>
                <SiShopee  size={40} color='red'/> 
            </Link>
        </div>
)


const Header = () => {

    const {cartTotalQuantity} = useSelector((state)=>state.cart);
    const [showMenu, setshowMenu] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CALCULATE_TOTAL_QUANTITY())
    }, [dispatch]);



    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {displayName, email , uid} = user;

              const setName = (name)=> name.split('@')[0].replace(/^\w/, c => c.toUpperCase());

              setDisplayName(() => displayName ? setName(displayName) : setName(email))
              
              dispatch(SET_ACTIVE_USER({
                email: email,
                userName: displayName ? setName(displayName) : setName(email),
                userID: uid
              }))
            } else {
                dispatch(REMOVE_ACTIVE_USER()) 
                setDisplayName('')
                
            }
          });
          
        
    }, [dispatch , displayName]);

    const toggleMenu = ()=>{
        setshowMenu(!showMenu)
    }

    const hideMenu = ()=>{
        setshowMenu(false)
    }

    const cart = (
        <span className='cart'>
            <NavLink to='cart' className={activeLink}>
                <Badge 
                    badgeContent={cartTotalQuantity || '0'} 
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                    overlap="rectangular" 
                    color="error"
                >
                 <FaCartShopping size={20}/>
                </Badge>
            </NavLink>
        </span>
    )

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
                             Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'/contact'}
                                className={activeLink}
                                >
                                Contactenos
                            </NavLink>
                        </li>

                        <div className='header-right' onClick={hideMenu}>
                        <span className='links'>
                            <ShowOnLogout>
                                <NavLink to={'/login'} className={activeLink}>
                                  Inicia sesión
                                </NavLink>
                            </ShowOnLogout>
                            <ShowOnLogIn>
                            </ShowOnLogIn>
                            
                        </span>

                        <div  className="user-info">
                        
                        {cart}

                        <ShowOnLogIn >
                        <Account/>
                        </ShowOnLogIn>

                        </div>
                        

                        

                    </div>
                       
                    </ul>
                    
                    
                    
                </nav>
                
                <div className='menu-icon'>
                <Helmet>
                <body className={showMenu ? 'blur' : ''} />
                </Helmet>
                    <ShowOnLogIn>
                        <Account/>
                    </ShowOnLogIn>
                    {cart}
                    <BiMenuAltRight size={30} onClick={toggleMenu} />
                </div>

            </div>
        </HeaderContainer>
    );
}

export default Header;
