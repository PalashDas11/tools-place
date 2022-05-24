import React, { useEffect, useState } from 'react';
import ToolDetails from './ToolDetails';


 

const Tools = () => {
    const [tools, setTools] =useState([])
    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    return (
    
          <div className='mt-8'>
              <h2 className="text-2xl font-bold text-center py-4">Tools place</h2>
              
                <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3  '>
            {
                tools.map(tool => <ToolDetails 
                    tool ={tool} 
                    key = {tool._id}
                ></ToolDetails>)
            }    
           
        </div>
          </div>
    );
};

export default Tools;