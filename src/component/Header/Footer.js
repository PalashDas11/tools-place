import React from 'react';
import { h6, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className =" w-full h-screen bg-slate-50 ">
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-5 custom-footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <h6> <Link to="/">Branding </Link></h6>
                    <h6> <Link to="/">Design </Link></h6>
                    <h6> <Link to="/">Marketing </Link></h6>
                    <h6> <Link to="/">Advertisement </Link></h6>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <h6> <Link to="/">About us</Link> </h6>
                    <h6> <Link to="/">Contact </Link></h6>
                    <h6> <Link to="/">Jobs </Link></h6>
                    <h6> <Link to="/">Press </Link> kit</h6>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <h6> <Link to="/">Terms of use</Link> </h6>
                    <h6> <Link to="/">Privacy policy</Link> </h6>
                    <h6> <Link to="/">Cookie policy</Link> </h6>
                </div>
                <div>
                    <span className="footer-title">Need help? /quick contacts</span>
                    <h6 className='text-xl text-primary'>01707397056</h6>
                    <h6>Monday-Friday: 9:00-20:00</h6>
                    <h6>Saturday: 10:00-15:00</h6>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;