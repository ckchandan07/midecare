import React, { useEffect, useState } from "react";
import axios from "axios";

const feedback = [
    {
        id: 1,
        img: "/Image/review-01.png",
    },
    {
        id: 2,
        img: "/Image/review-02.png",
    },
];

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
            .then(response => {
                console.log("API Response:", response.data);
                if (response.data && Array.isArray(response.data.data)) {
                    setReviews(response.data.data);
                } else {
                    setReviews([]);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="main feedbacks">
            <h1 className="text-3xl font-bold">What Our Customers Say</h1>
            <div className="start-feedback flex justify-between flex-wrap gap-4">
                {reviews.slice(0, 2).map((review, index) => (
                    <div key={review.ID} className="review-card bg-white shadow-lg rounded-lg p-6">
                        <p className="text-gray-600">{review.Reviews}</p>
                        <div className="review-img-card flex items-center">
                            <img 
                                src={feedback[index] ? feedback[index].img : "https://via.placeholder.com/50"} 
                                alt={review.Name} 
                                className="review-img  rounded-full mr-3"
                            />
                            <div>
                                <h5 className="text-lg font-bold">{review.Name}</h5>
                                <p className="text-sm text-gray-500">{review.Company}</p>
                            </div>
                        </div>
                        <div className="texxt">
                        <h2>“</h2></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
