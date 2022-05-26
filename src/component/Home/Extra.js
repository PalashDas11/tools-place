import React from 'react';
import './Extra.css'

const Extra = () => {
    return (
        <div className='my-8 p-5'>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3'>
            <div className='w-96 border p-5 extra-section custom-w'>
                <h2 className='font-semibold text-xl pb-3 '>GOOD DESIGN & FUNCTIONALITY</h2>
                <h2 className='pb-3'>One of the best things about site  design is that it never stands still for a moment. But that does mean that keeping up with the latest trends, techniques, and technologies can be a bit of a challenge. </h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
            <div className='w-96 border p-5 extra-section custom-w'>
                <h2 className='font-semibold text-xl pb-3 '>BEAUTIFUL LOOK ON ANY DEVICE</h2>
                <h2 className='pb-3'>Have a look , this site is looking really amazine. Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size</h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
            <div className='w-96 border p-5 extra-section custom-w'>
                <h2 className='font-semibold text-xl pb-3 '>LONG SHELF LIFE OF ALL TOOLS</h2>
                <h2 className='pb-3'>Shelf life is the recommended maximum time for which products or fresh harvested produce can be stored, during which the defined quality of a specified proportion of the goods remains acceptable under expected or specified.</h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Extra;