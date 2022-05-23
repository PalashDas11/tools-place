import React, { createContext, useEffect, useState } from 'react';
import OderModal from './OderModal';
import ToolDetails from './ToolDetails';
import ToolSingleItem from './ToolSingleItem';


 

const Tools = () => {
    const [tools, setTools] =useState([])
    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    return (
    
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3 '>
            {
                tools.map(tool => <ToolDetails 
                    tool ={tool} 
                    key = {tool._id}
                ></ToolDetails>)
            }    
           
        </div>
    );
};

export default Tools;