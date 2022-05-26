import React from 'react';
import './Extra.css'

const Extra = () => {
    return (
        <div className='my-8 p-5'>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3'>
            <div className='w-96 border p-5 extra-section'>
                <h2 className='font-semibold text-xl pb-3 '>GOOD DESIGN & FUNCTIONALITY</h2>
                <h2 className='pb-3'>The first of the month is coming, we have to get money, we have to get money. It cost money to eat and they don’t want you</h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
            <div className='w-96 border p-5 extra-section'>
                <h2 className='font-semibold text-xl pb-3 '>GOOD DESIGN & FUNCTIONALITY</h2>
                <h2 className='pb-3'>The first of the month is coming, we have to get money, we have to get money. It cost money to eat and they don’t want you</h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
            <div className='w-96 border p-5 extra-section'>
                <h2 className='font-semibold text-xl pb-3 '>GOOD DESIGN & FUNCTIONALITY</h2>
                <h2 className='pb-3'>The first of the month is coming, we have to get money, we have to get money. It cost money to eat and they don’t want you</h2>
                <div>
                <button className='extra-btn'>Read more</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Extra;