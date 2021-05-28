import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            
            <div className="footerwrap">
                <div className="footerlinkscontainer">
                        <div className="logo">
                          <img src="praan.png" width="120px" alt=""/>                    
                        </div>
                    <div className="footerlinkswraper">
                        <div className="footerlinkitems">
                            <div className="footerlinktitle">
                                <h1>Garvit</h1>
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
                    <h5 style = {{color:'white'}}>Copyright &copy; 2021 All Rights Reserved by Garvit</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer