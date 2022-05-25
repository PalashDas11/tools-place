import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHammer, faLightbulb, faLock, faPaintbrush, faScissors, faScrewdriver, faStream, faTag } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const Category = () => {
    return (
        <div className='p-5 my-8 '>
            <div className='mb-10'>
                <h2 className="text-2xl font-bold text-left uppercase py-4">Shop By <span className="text-primary">Category -</span></h2>
                <p className='font-semibold pb-3'>You contribute over half of your life operating. Let us help you find the right fit for you or your corporation.</p>
            </div>

            <div className="custom-bussiness grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 shadow py-7">

                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faHammer}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center  ">Breaking tools</h5></div>
                </div>

                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">Carpenter tools</h5></div>
                </div>

                <div className="stat ">
                    <div className="stat-title pb-4  text-5xl text-center text-black">
                        {/* <img src={feedback} alt="" /> */}
                        
                        <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">hand tools</h5></div>
                </div>
                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">handsaw</h5></div>
                </div>
                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faScissors
                        }></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">opne piles</h5></div>
                </div>
                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">Plumbing tools</h5></div>
                </div>
                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        
                        <FontAwesomeIcon icon={faScrewdriver}></FontAwesomeIcon>

                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">power</h5></div>
                </div>
                <div className="stat ">
                    <div className="stat-title pb-4 text-5xl text-center text-black">
                        
                        <FontAwesomeIcon icon={faPaintbrush}></FontAwesomeIcon>
                    </div>
                    <div className="stat-desc"><h5 className="font-bold text-black text-sm uppercase text-center">Piant tools</h5></div>
                </div>

            </div>
        </div>
    );
};

export default Category;