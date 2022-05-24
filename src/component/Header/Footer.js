import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
           
            backgroundSize: 'cover',
           
        }} className="p-10">
            <div className=' footer '>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to ="/" className="link link-hover">Branding</Link>
                    <Link to ="/" className="link link-hover">Design</Link>
                    <Link to ="/" className="link link-hover">Marketing</Link>
                    <Link to ="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to ="/" className="link link-hover">About us</Link>
                    <Link to ="/" className="link link-hover">Contact</Link>
                    <Link to ="/" className="link link-hover">Jobs</Link>
                    <Link to ="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to ="/" className="link link-hover">Terms of use</Link>
                    <Link to ="/" className="link link-hover">Privacy policy</Link>
                    <Link to ="/" className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Need help? /quick contacts</span>
                    <Link to ="/" className="link link-hover text-2xl text-primary">01707397056</Link>
                    <Link to ="/" className="link link-hover"><small>Monday-Friday: 9:00-20:00</small></Link>
                    <Link to ="/" className="link link-hover"><small>Saturday: 10:00-15:00</small></Link>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;