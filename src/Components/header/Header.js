import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to=''>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">
                    SHOP
                </Link>
                <Link to='/contact' className="option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header
