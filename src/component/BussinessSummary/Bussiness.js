import React from 'react';
import './Bussiness.css'
import customer from '../../img/customer.png'
import feedback from '../../img/feedback.png'
import revenue from  '../../img/revenue.png'
import tool from '../../img/tool.png'

const Bussiness = () => {
  return (
    <div className="px-5 shadow mt-8 ">
         <div>
         <h1 className="text-4xl font-semibold text-center uppercase pb-4"> A trusted Bussiness</h1>
         <h3 className="text-xl font-semibold text-center uppercase pb-12"> See our Bussiness analytical thing</h3>
         </div>
      <div className="custom-bussiness grid lg:grid-cols-4 sm:grid-cols-2 shadow pb-9">

        <div className="stat ">
          <div className="stat-title pb-4">
            <img src={customer} alt="" />
          </div>
          <div className="stat-value">100+</div>
          <div className="stat-desc"><h5 className="text-xl">Customers</h5></div>
        </div>

        <div className="stat ">
          <div className="stat-title pb-4">
            <img src={revenue} alt="" />
          </div>
          <div className="stat-value">120M+</div>
          <div className="stat-desc"><h5 className="text-xl">Annual revenue</h5></div>
        </div>

        <div className="stat ">
          <div className="stat-title pb-4">
            <img src={feedback} alt="" />
          </div>
          <div className="stat-value">33K+</div>
          <div className="stat-desc"><h5 className="text-xl">Reviews</h5></div>
        </div>
        <div className="stat ">
          <div className="stat-title pb-4">
            <img src={tool} alt="" />
          </div>
          <div className="stat-value">50+</div>
          <div className="stat-desc"><h5 className="text-xl">Tools</h5></div>
        </div>

      </div>
    </div>
  );
};

export default Bussiness;