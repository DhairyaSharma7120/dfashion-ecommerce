import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <span className="logo-letter red">D</span>
                <span className="logo-letter"></span>
                <span className="logo-letter">f</span>
                <span className="logo-letter">a</span>
                <span className="logo-letter">s</span>
                <span className="logo-letter">h</span>
                <span className="logo-letter">i</span>
                <span className="logo-letter">o</span>
                <span className="logo-letter red">N</span>
            </Link>
            <div className='nav-links-container'>
                <Link to='/shop' className='nav-links'>SHOP</Link>
                <Link to='/shop' className='nav-links'>CONTACT</Link>
                <Link to='/shop' className='nav-links'>SINGIN</Link>
                <Link to='/shop' className='nav-links cart'><ShoppingCartIcon/></Link>
            </div>           
        </div>
    )
}

export default Header
