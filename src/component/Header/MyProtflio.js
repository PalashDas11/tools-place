import React from 'react';
import AboutImg from '../../img/About.jpg'
import './MyProtflio.css'

const MyProtflio = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 protfolio mt-8 items-center'>     
                <img src={AboutImg}  alt="" />
            <div className="lg:col-span-2" >
                <h4 className="text-2xl font-bold pb-5">About me-</h4>
                <p className='text-md'>Hi, Welcome to About page- My name is Palash Das, I'm a Full Stack developer.I includes includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Developing front end website architecture and user interaction on web page. I also creating servers and databases for functionality, designing and developing APIs. And Using Mongodb Database. I Ensure responsiveness of web applications for mobile and tablet. </p>
                <p><span className='text-lg font-semibold'>My Skills</span> : HTML, CSS, CSS framwork(Bootstrap , tailwind css) Javascript, React Javascript, Node js, firebase, Mongodb.   </p>
                <p className='pt-6 font-bold'>Here my some website Link: - <br /></p>
                <button>https://omega-grocery.web.app/</button><br />
                <button>https://fitcoach.netlify.app/</button><br />
                <button>https://delicate-palmier-ff73c1.netlify.app/</button><br />
            </div>

        </div>
    );
};

export default MyProtflio;