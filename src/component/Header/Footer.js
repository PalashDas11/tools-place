import React from 'react';

const Footer = () => {
    return (
        <footer style={{
           
            backgroundSize: 'cover'
        }} className="p-10">
            <div className=' footer '>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Need help? /quick contacts</span>
                    <a className="link link-hover text-2xl text-primary">01707397056</a>
                    <a className="link link-hover"><small>Monday-Friday: 9:00-20:00</small></a>
                    <a className="link link-hover"><small>Saturday: 10:00-15:00</small></a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;