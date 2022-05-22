import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolSingleItem = () => {
    const {toolId} = useParams();
    console.log(toolId);
    const [singleTool, setSingleTool] = useState({});
    console.log(singleTool);

   useEffect(() =>{
       const url = `packes.json/toolDetails/${toolId}`
       console.log(url)
       fetch(url)
       .then(res => res.json())
       .then(data => setSingleTool(data))
   }, [])
    
    return (
        <div>
            <h1>single item page{singleTool.name}</h1>
        </div>
    );
};

export default ToolSingleItem;