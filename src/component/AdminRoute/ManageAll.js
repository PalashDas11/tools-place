import React, { useEffect, useState } from 'react';
import ManageDetails from './ManageDetails';




const Tools = () => {
    const [manages, setManage] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])
    return (

        <div className='mt-8 p-5'>
            <h2 className="text-2xl font-bold text-left uppercase py-4">See our  <span className="text-primary">tools collection -</span></h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3  '>
                {
                    manages.map(manage => <ManageDetails
                        manage={manage}
                        key={manage._id}
                    ></ManageDetails>)
                }
            </div>

        </div>
    );
};

export default Tools;