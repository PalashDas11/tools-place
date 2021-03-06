import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOder = () => {

    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://salty-scrubland-12544.herokuapp.com/order?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrder(data);
                });
        }
    }, [user])


    const handleDelete = id => {
  
        const confirm = window.confirm("Are you sure want to delete?");
        if (confirm) {
            const url = `https://salty-scrubland-12544.herokuapp.com/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('data deleted')
                    const reamining = orders.filter(oderId => oderId._id !== id);
                    setOrder(reamining)
                })
        }

    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-left  py-4'>My Order: {orders.length}</h2>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product name</th>
                            <th>quantity</th>
                            <th>Address</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.productName}</td>
                                <td>{a.productQuantity}</td>
                                <td>{a.address}</td>
                                <td>
                                    {(a.productPrice && !a.paid) && <Link to ={`/dashboard/payment/${a._id}`}><button className="btn btn-sm mr-2">payment</button></Link> }
                                    {(a.productPrice && a.paid) ?
                                   
                                       ( <button className="btn btn-sm mr-2">paid</button>):
                                        <button className="btn btn-sm bg-red-700" onClick={() => handleDelete(a._id)} >Delete</button>                    
                                    }
                                    {(a.productPrice && a.paid) &&
                                   
                                     <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>                    
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

export default MyOder;