import React from 'react';

const Bussiness = () => {
    return (
        <div className=" grid md:grid-cols-4 sm:grid-cols-1 shadow bg-primary">
  
        <div className="stat ">
          <div className="stat-title">Customers</div>
          <div className="stat-value">100+</div>
          <div className="stat-desc"></div>
        </div>
        
        <div className="stat ">
          <div className="stat-title">Annual revenue</div>
          <div className="stat-value">120M+ </div>
          <div className="stat-desc"></div>
        </div>
        
        <div className="stat ">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">33k+</div>
          <div className="stat-desc"></div>
        </div>
        <div className="stat ">
          <div className="stat-title">Tools</div>
          <div className="stat-value">50+</div>
          <div className="stat-desc"></div>
        </div>
        
      </div>
    );
};

export default Bussiness;