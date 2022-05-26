import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const ReviewDetails = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://salty-scrubland-12544.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-8 p-5 '>
            <h2 className="text-3xl text-center font-semibold pb-6">See What Our Customers Say About Us</h2>

                <div  className=' grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3'  >
                 
                        
                    {
                        reviews.map(review => <ReviewRow
                            review={review}
                            key={review._id}
                        ></ReviewRow>
                        )
                    }

                </div>

        
        </div>
    );
};

export default ReviewDetails;