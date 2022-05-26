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

    const [error, setError] = useState('')

    const [singleProduct, setSingleProduct] = useState({})

    const { name, quantity, price, minimum_order_quantity, available_quantity } = singleProduct;
    useEffect(() => {
        const url = `https://salty-scrubland-12544.herokuapp.com/purchase/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data)
                reset(data)
            })
    }, [toolId, reset])
   
    const handleBooking = event => {
        const inputQuantity = event.target?.quantity.value
        event.preventDefault();

        const oderProduct = {
            productName: name,
            productPrice: price,
            productQuantity: inputQuantity,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target?.phone.value,
            address: event.target?.address.value,
        }

        if ((inputQuantity >= minimum_order_quantity) && (available_quantity >= inputQuantity)) {
            
            fetch('https://salty-scrubland-12544.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(oderProduct)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success !== false) {
                        toast(`Order done successfully `)
                    }
                    else {
                        toast.error(`Already have an Order`)
                    }

                })

          setError('');
        }
        else {

            setError('Opps! you have mistake Please checked our availabe quantity and minimum quantity ')
        }

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
                <label htmlFor="">Product Price:</label>

                <input type="number" name="name" disabled value={price} className="input input-bordered w-full max-w-xs" />
                <label htmlFor="">Product Quantity:</label>
                
                <input type="number" name="quantity" defaultValue={minimum_order_quantity} className="input input-bordered w-full max-w-xs" />
                <label htmlFor="">Phone Number:</label>
                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <label htmlFor="">Home Address:</label>
                <input type="text" name="address" placeholder="address" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                <p className="text-red-600 text-lg font-semibold w-full max-w-xs">{error}</p>
            </form>

        </div>
    );

};

export default OderModal;