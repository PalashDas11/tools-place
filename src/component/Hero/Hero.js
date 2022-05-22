import React from 'react';
import './Hero.css'
import banner from '../../img/banner.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen banner-img">

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="content">
          <div className="max-w-md">
              <h2 className="mb-5 text-2xl font-bold">IT'S ALL THE POWER YOU NEED</h2>
            <h1 className="mb-5 text-7xl font-bold">GET 30% OFF</h1>
            <h1 className="mb-5 text-4xl font-bold text-primary pb-5">FOR POWER TOOLS</h1>
            <p className="mb-5"></p>
            <Link to="/purchage" className="custom-btn">Order Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;