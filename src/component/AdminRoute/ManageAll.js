import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageDetails from './ManageDetails';




const Tools = () => {
    const [manages, setManage] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])
    return (

        <div className='mt-8 p-5'>
            <h2 className="text-2xl font-bold text-left uppercase py-4">See our  <span className="text-primary">tools collection -{manages.length}</span></h2>

        

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className="font-font-semibold">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product name</th>
                            <th>quantity</th>
                            <th>Address</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold">

                        {
                            manages.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.productName}</td>
                                <td>{a.productQuantity}</td>
                                <td>{a.address}</td>
                                <td>

                                  {
                                     a.productPrice && !a.paid ?
                                      <>
                                      <p className="text-red-600">Pendding</p>
                                     </>
                                     :
                                     <>
                                     <p className="text-green-500">Paid</p>
                                     </>
                                  }               
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Tools;