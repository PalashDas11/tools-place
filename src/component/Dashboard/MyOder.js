import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOder = () => {
    const [orders, setOrder] = useState([]);
    
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
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
    return (
        <div>
        <h2>My Appointments: {orders.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product name</th>
                        <th>quantity</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.customerName}</td>
                            <td>{a.productName}</td>
                            <td>{a.productQuantity}</td>
                            <td>{a.address}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOder;