import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.comonent'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
// import {sendEmail} from '../../email-testing/email'
const Header = ({ currentUser, profilePic, hidden }) => {
    console.log(currentUser)
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
                {/* <div className="nav-links" >send</div> */}
                <Link to='/shop' className='nav-links'>SHOP</Link>
                <Link to='/shop' className='nav-links'>CONTACT</Link>
                { 
                    currentUser != null ?
                    
                    <div className='nav-links' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' className='nav-links'>SING IN</Link>
                }
                <Link className=''><CartIcon /></Link>
                {   
                    currentUser != null ?
                        profilePic != null?
                        // :null
                        <div className='userprofile'
                        style={{backgroundImage: `url(${profilePic})`}}
                        ></div> : <AccountCircleSharpIcon className='userprofile'/> : null
                }
                
            </div>
            {    hidden? null: <CartDropdown /> }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}) 

export default connect(mapStateToProps)(Header);
