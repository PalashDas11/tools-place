import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const ToolSingleItem = () => {
   
    const {toolId} = useParams();
   
    const [singleTool, setSingleTool] = useState({});
    const navigate = useNavigate();
    const navigateId = id => {
        navigate(`/purchase/${id}`)
    }

   useEffect(() =>{
       const url = `http://localhost:5000/toolDetails/${toolId}`
       fetch(url)
       .then(res => res.json())
       .then(data => setSingleTool(data))
   }, [])
   


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-5 items-center">
            
          <div>
              <img src={singleTool.img}alt="" />
          </div>
          <div className="md:col-span-2">
          <h2 className="text-xl font-semibold pb-3">Name: {singleTool.name}</h2>
                    <p className="pb-3"> {singleTool.description}</p>
                    <p className="pb-3">Quantity: {singleTool.quantity}</p>
                    <p className="pb-3">Available quantity: {singleTool.available_quantity}</p>
                    <p className="pb-3">Minimum order quantiy: {singleTool.minimum_order_quantity}</p>
                    <h2 className='text-2xl font-bold text-primary pb-3'>${singleTool.price}</h2>
                    <button className="btn btn-primary"onClick={()=>navigateId(toolId)}
                    > purchase</button>
          </div>
        </div>
    );
};

export default ToolSingleItem;