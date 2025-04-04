import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="star-news">
        <div className="circle-news"></div>
    <div className="main newsletter flex justify-center items-center min-h-[380px] rounded-2xl">
      <div className="news text-center text-white">
        <h2 className="text-3xl font-bold">Subscribe to Newsletter</h2>
        <p className="text-sm opacity-80">
          We have a wide experience in experience design and strategy.
        </p>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-md flex overflow-hidden max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-700 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-1"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
