import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ProductManage from './ProductManage';

const ManageDetails = () => {
   
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
   
    const handleDelete = id => {
        const confirm = window.confirm("Are you sure want to delete?");
         if(confirm){
             console.log('deleted id ', id);
             fetch(`http://localhost:5000/tool/${id}`, {
                 method: 'DELETE',
                 
             })
             .then(res => res.json())
             .then(data => {
                toast('Products deleted');
                const reamining = tools.filter(tool => tool._id !== id);
                setTools(reamining);
             })
         }
    }
    return (
        <div className='mt-8 p-5'>
            <h2 className="text-2xl font-bold text-left uppercase py-4">See our  <span className="text-primary">tools collection -</span></h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3  '>
                {
                    tools?.map(tool => <ProductManage
                        tool={tool}
                        key={tool._id}
                        handleDelete = {()=>handleDelete(tool._id)}
                    ></ProductManage>)
                }
             
            </div>
        </div>
    );
};

export default ManageDetails;