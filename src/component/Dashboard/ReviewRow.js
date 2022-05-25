import React from 'react';

const ReviewRow = ({ review }) => {
    return (
        <div className="shadow-xl border p-5 rounded-2xl">
            <p className="text-md font-semibold">User name -{review.name}</p>
            <p className="text-md pb-3">{review.review}</p>
            <p className="text-lg font-semibold">{review.rating} Star</p>
        </div>
    );
};

export default ReviewRow;