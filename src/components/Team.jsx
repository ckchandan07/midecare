import React from 'react'

const specialists = [
    { name: "Dr. Awaatif Al", specialty: "Dental Care" },
    { name: "Dr. Filipa Gaspar", specialty: "Cardiology" },
    { name: "Dr. Sukhmeet Gorae", specialty: "Neurological" },
    { name: "Dr. Siri Jakobsson", specialty: "Pediatrics" },
  ];

const Team = () => {
  return (
    <div className='start-team'>
      <div className="circle-team"></div>
    <div className="main-team flex flex-col items-center justify-center">
      <div className="start-section text-center mb-8">
        <h1 className="text-4xl font-bold">We Have The Best Specialist</h1>
        <p className="text-gray-600 mt-4 max-w-md">
          We have a wide experience in experience design and strategy, with locally-rooted knowledge.
        </p>
      </div>
      
      <div className="team-card">
        {specialists.map((specialist, index) => (
          <div key={index} className="team-blanks bg-white p-6 rounded-xl shadow-lg flex flex-col w-60">
            <div className="team-blank w-full h-40 rounded-t-xl mb-4"></div>
            <h3 className="text-lg font-semibold">{specialist.name}</h3>
            <p className="text-gray-600">{specialist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Team