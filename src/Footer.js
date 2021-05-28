import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            
            <div className="footerwrap">
                <div className="footerlinkscontainer">
                    {/* <Link to="/" className="footer-router-link"> */}
                        <div className="logo">
                          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" width="120px" alt=""/> {/* Gfg Logo */}                        
                        </div>
                    {/* </Link> */}
                    <div className="footerlinkswraper">
                        <div className="footerlinkitems">
                            <div className="footerlinktitle">
                                <h1>GFG</h1>
                            </div>
                            <div className="footerlink">About</div>
                        </div>
                    </div>
                    <div className="footerlinkswraper">
                        <div className="footerlinkitems">
                            <div className="footerlinktitle">
                                <h1>SUPPORT</h1>
                            </div>
                            <div className="footerlink">Terms of Use</div>
                            <div className="footerlink">Privacy</div>
                            <div className="footerlink">Contact</div>
                            <div className="footerlink">Help</div>
                        </div>
                    </div>
                    <div className="social">
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaTwitter />
                        </a>
                        <a href="#">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <h5>Copyright &copy; 2020 All Rights Reserved by Gfg SRM</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer