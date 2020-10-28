import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Media/logo.png'
import Navbar from 'react-bootstrap/Navbar'

import '../CSS/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
        <>
            <Navbar className="navbar" bg="dark">
                <Navbar.Brand className="leftCantainor" href="/">
                    <img
                        src={logo}
                        // width="100"
                        // height="100"
                        // className="d-inline-block align-top"
                        className="companyLogo"
                        alt="logo"
                    />{' '}
                    <span className="companyName" > Easy GST </span>
                </Navbar.Brand>

                <div className="rightCantainor">
                    <Link to="/" className="homeLink">
                    <div className="home__span">
                        Home
                        </div>
                    </Link>
                    <Link to ="/signup" className="accountLink">
                        <div className="account">Account</div>
                    </Link>
                </div>
                    
            </Navbar>
        </>

    )
}

export default Header
