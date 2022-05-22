import React from 'react';
import './ToolDetails.css'
import { useNavigate } from 'react-router-dom';

const ToolDetails = ({ tool }) => {
    console.log(tool);
    const { _id, name, description, price, img, quantity, available_quantity, minimum_order_quantity } = tool;

    const navigate = useNavigate();
    const navigateId = id => {
        navigate(`/toolDetails/${id}`)
    }
    return (
        <div className="custom-card-res">
            <div className="card card-compact w-96 bg-base-100 shadow-xl sm:mx-auto custom-card-res ">

                <figure><img className="w-full" src={img} alt="" /></figure>

                <div className="card-body ">
                    <h2 className="text-2xl">Name: {name}</h2>
                    <p> {description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Available quantity: {available_quantity}</p>
                    <p>Minimum order quantiy: {minimum_order_quantity}</p>
                    <h2 className='text-2xl font-bold text-primary'>${price}</h2>
                    <div className='card-action'>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolDetails;