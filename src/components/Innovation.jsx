import React from 'react'

const Innovation = () => {
  return (
    <div className="main-inv flex flex-col md:flex-row items-center justify-between p-8 gap-6">
      <div className="innovations text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Clinic With Innovation</h1>
        <p className="text-gray-600 max-w-lg mt-2">
          We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          <b>Learn More</b> 
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="nurse flex flex-col gap-15">
          <div className="doctor-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <img src="/Image/nurse.png" alt="Doctor" className="w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold">Qualified Doctors</h3>
          </div>
          <div className="doctor-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <img src="/Image/van.png" alt="Emergency Care" className="w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold">Emergency Care</h3>
          </div>
        </div>
        <div className="doctor flex justify-center">
          <div className="doctor-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <img src="/Image/doctor.png" alt="24 Hours Service" className="w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold">24 Hours Service</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovation
