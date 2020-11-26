import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import logo from '../Media/logo2.png'
import emblem from '../Media/emblem.png'


function Header() {
    return (
        <nav className="header">
            <div className="header__logo1">
                <Link className="header__logo" to="/home">
                    < img src={logo} alt=" company logo" />
                    <div className="header__logo__text">
                        <span className="links"> GST Suvidha Kendra </span>
                        <span className="underlinks"> An Authorised GSP</span>
                        

                        <div className="phone">
                            <span className="email">services@gstinsuvidhakendra.com</span>
                        </div>

                    </div>
                </Link>
            </div>

            <div className="header__middle">

                {/*<img src={emblem} alt="emblem" />*/}

                <span>
                    Goods and Services Tax
                    </span>

            </div>
        </nav>
    )
}

export default Header
