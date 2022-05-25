import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/tools`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
           toast('Added successfull')
        })
    }

    return (
        <div className="container py-4">
            <h2 className="text-center text-2xl font-bold">Add tool product </h2>
            <form className="grid grid-cols-1 gap-3 justify-items-center mt-2" onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input className="input input-bordered w-full max-w-xs" placeholder="Description" {...register("description", {required:true})}  />
                <input className="input input-bordered w-full max-w-xs" placeholder="Price" type="number" {...register("price", {required:true})}/>
                <input className="input input-bordered w-full max-w-xs" placeholder="Photo URL" type="text" {...register("img", {required:true})} />
                <input className="input input-bordered w-full max-w-xs" placeholder="Quantity" type="number" {...register("quantity", {required:true})} />
                <input className="input input-bordered w-full max-w-xs" placeholder="Minimum order quantity" type="number" {...register("minimum_order_quantity", {required:true})} />
                <input className="input input-bordered w-full max-w-xs" placeholder="Available quantity" type="number" {...register("available_quantity", {required:true})} />
                
                <input className="btn btn-primary" placeholder="Name" type="submit" value="Add Inventory" />
            </form>

        </div>
    );
};

export default AddProduct;