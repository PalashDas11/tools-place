import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        console.log('id no: ', id);
        const confirm = window.confirm("Are you sure want to delete?");
        if (confirm) {
            const url = `http://localhost:5000/order/${id}`
            console.log(url);
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
                            <th>Payment</th>
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
                                <td>
                                    <button class="btn btn-sm mr-2">payment</button>
                                    <button class="btn btn-sm bg-red-700" onClick={() => handleDelete(a._id)} >Delete</button>
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