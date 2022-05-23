import React, { useEffect, useState } from 'react';
import './OrderModal.css'
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';

const OderModal = () => {
    const {toolId} =useParams()

    const [user] = useAuthState(auth)

    const { register, handleSubmit} = useForm();

   const [singleProduct, setSingleProduct] = useState({})
   
    const {_id, name, } = singleProduct;
   useEffect(() =>{
    const url = `http://localhost:5000/purchase/${toolId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setSingleProduct(data))
}, [])
    const onSubmit = async data => {
         console.log(data);
    }
    return (
        <div className=" py-4">
            <h2 className="text-center text-xl font-semibold pb-2">Oder Page</h2>
            <form className="flex flex-col custom-form sm:w-96" onSubmit={handleSubmit(onSubmit)}>        
                <input value={name} placeholder="Product name" {...register("name")} />                
                <input value={user?.displayName} placeholder="Name" {...register("displayName", { required: true, maxLength: 20 })} />
                <input value={user?.email} placeholder="email" {...register("email", { required: true, maxLength: 20 })} />
              
                <input placeholder="Phone" {...register("phone")} />
                <input placeholder="Address" {...register("address")} />
                <input className="btn btn-primary" placeholder="Name" type="submit" value="Add Order" />
            </form>

        </div>
    );
   
};

export default OderModal;