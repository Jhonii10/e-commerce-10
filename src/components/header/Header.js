import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import { FaCartShopping } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";


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
        <Link to='cart'>
            <FaCartShopping size={20}/>
        </Link>
    </span>
)

const Header = () => {

    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = ()=>{
        setshowMenu(!showMenu)
    }

    const hideMenu = ()=>{
        setshowMenu(false)
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
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact US</Link>
                        </li>
                    </ul>
                    
                    <div className='header-right' onClick={hideMenu}>
                        <span className='links'>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/registro'}>Register</Link>
                            <Link to={'/order-history'}>My orders</Link>
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
