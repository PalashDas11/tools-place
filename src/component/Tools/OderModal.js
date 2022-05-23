import React, { useEffect, useState } from 'react';
import './OrderModal.css'
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OderModal = () => {
    const { toolId } = useParams()

    const [user] = useAuthState(auth)

    const { reset } = useForm();

    const [singleProduct, setSingleProduct] = useState({})

    const { _id, name, quantity } = singleProduct;
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data)
                reset(data)
            })
    }, [toolId, reset])
    const handleBooking = event => {
        event.preventDefault();

       
        const oderProduct = {
            productName: name,
            productQuantity: quantity,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target?.phone.value,
            address: event.target?.address.value,
        }
        console.log(oderProduct);
        fetch('http://localhost:5000/order', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            }, 
            body:JSON.stringify(oderProduct)
        })
        .then(res => res.json())
        .then(result => {
            toast('order added')
            setSingleProduct(null)
        })
    }
    return (
        <div className=" py-4">
            <h2 className="text-center text-xl font-semibold pb-2">Oder Page</h2>
          
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                 <label htmlFor="">Product Name:</label>          
                <input type="text" name="name" disabled value={name || ''} className="input input-bordered w-full max-w-xs" />
                 <label htmlFor="">User Name:</label>
                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                 <label htmlFor="">User Eamil:</label>
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                 <label htmlFor="">Product Quantity:</label>
                <input type="number" name="email" disabled value={ quantity|| ''} className="input input-bordered w-full max-w-xs" />
                <label htmlFor="">Phone Number:</label>
                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <label htmlFor="">Home Address:</label>
                <input type="text" name="address" placeholder="address" className="input input-bordered w-full max-w-xs" />
                
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>

        </div>
    );

};

export default OderModal;