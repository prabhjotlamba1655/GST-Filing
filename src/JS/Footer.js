import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import logo from '../Media/logo2.png'

function Footer() {

  return (
    <div className="footer_div">
      <div className="footer_left">
                <div className="phone">
                    <CallIcon className="call" />
                    <span className="second__links">9315744106</span>
                </div>
                <div className="header__logo1">
                 <Link className="header__logo" to="/home">
                    < img src={logo} alt=" company logo" />
                    <div className="header__logo__text">
                        <span className="links"> GST Suvidha Kendra </span>
                        <span className="underlinks"> An Authorised GSP</span>
                      
                    </div>
                 </Link>
               </div>
      </div>
      <div className="footer_right">
        <div className="footer_right_upper">
            <div className="mail_address">
                <MailIcon className="call" />
                 <span className="email">services@gstinsuvidhakendra.com</span>
             </div>
             <div className="address" >
                <MailIcon className="call" />
                 <span className="email">services@gstinsuvidhakendra.com</span>
             </div>
        </div>
        <div className="GST">

                <span>
                    Goods and Services Tax
                </span>
        </div>

      </div>

    </div>

  )
}

export default Footer
