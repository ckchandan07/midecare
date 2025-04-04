import React from "react";

const services = [
  {
    id: 1,
    title: "Dental Care",
    icon: "🦷",
  },
  {
    id: 2,
    title: "Pulmonary",
    icon: "🫁",
  },
  {
    id: 3,
    title: "Neurological",
    icon: "🧠",
  },
  {
    id: 4,
    title: "Pediatrics",
    icon: "📋", 
  },
];

const Services = () => {
  return (
    <div className="service text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
      <div className="service-pa flex justify-center">
      <p className=" text-gray-600 max-w-md mx-auto mt-2">
        We provide the most full medical services, so every person could have the
        opportunity to receive qualitative medical help.
      </p>
      </div>
      
      <div className="cards-sr service-cards gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={` service-card w-60 h-60 rounded-xl shadow-lg flex flex-col items-center justify-between 
            transition-all duration-300 ease-in-out
            bg-white text-gray-900`}
          >
            <div className="text-6xl service-img">{service.icon}</div>
            <h3 className="font-bold">{service.title}</h3>
            <button className="text-sm flex items-center opacity-0 hover: transition-opacity duration-300">
              LEARN MORE <span className="ml-2 text-xl">&rarr;</span>
            </button>
          </div>
        ))}
      </div>

      </div>
   
  );
};

export default Services;
