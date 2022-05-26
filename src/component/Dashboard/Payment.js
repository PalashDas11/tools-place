import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2xp2IOKmnZEKMVyoc5M2yey12P7U2VV5G0ED7oRxdjivbfopRfJlQq5hp53WKMRJXxJfcyuLZOhNd76MH7JjYo00HBuSSE6M');

const Payment = () => {
    const {id } = useParams();
    const url = `https://salty-scrubland-12544.herokuapp.com/order/${id}`
    const {data:order, isLoading} =useQuery(['order', id], () => fetch(url,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    } ).then(res => res.json()));
     
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello Dear, {order.customerName}</p>
                    <h2 className="card-title">Please Pay for: {order.productName}</h2>
                    <p>Your product quantity is: <span className='text-orange-700'>{order.productQuantity}</span></p>
                    <p>Please Pay: ${order.productPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;