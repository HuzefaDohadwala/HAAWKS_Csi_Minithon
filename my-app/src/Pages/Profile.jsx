import React from 'react'
import "./Profile.css";
import Img from '../img/qr.jpg'

const Profile = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center parent font-neuropol text-[#FFFFFF] ">
        
        <div className="flex rounded-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 overlay">

          <div className='sidebar w-1/3 border-r-2 text-[#FFFFFF] font-neuropol' >
            <div className="sidebar-top border-b-2
            flex justify-center items-center">
              <div className="sidebar-logo w-1/3 h-[100px] bg-black-700 rounded-full mr-4 mb-4">
                      
              </div>
              <div className="sidebar-top-content w-1/2 h-[160px] ">
                <h1 className='text-xl mt-4'>Neon Nova</h1>
                <p className='text-sm '>Citizen Id: #7pq4757g</p>
                <p className='text-sm  mb-2'>Balance : 4756.22$</p>
              </div>
            </div>

            <div className="sidebar-list flex flex-col h-full">
              {/* <h1 className='m-6 '>Virtual Profile</h1>
              <h1 className='m-6 '>Virtual Profile</h1>
              <h1 className='m-6 '>Virtual Profile</h1> */}
              <div className="itemslist h-20 flex justify-center items-center border-b-2">
              <h1 className=' '>Virtual Profile</h1>
              </div>
              <div className="itemslist h-20 flex justify-center items-center border-b-2"><h1 className=' '>Transaction History</h1></div>
              
              <div className="itemslist h-20 flex justify-center items-center border-b-2">
                <h1 className=' '>Cyber Enhancements</h1>
              </div>

              <div className="itemslist h-20 flex justify-center items-center">
              <h1 className=' '>Settings</h1>
              </div>

            </div>
          </div>

          <div className="right-content h-full w-full">
          
  {/* Top Section: Basic Information */}
  <div className="top-section p-4 ">
    <h2 className="text-lg font-bold">Basic Information</h2>
    <p>Name: Neon Nova</p>
    <p>Age: 25</p>
    <p>Occupation: Freelancer</p>
  </div>

  {/* Middle Section: Virtual Identity QR Code and Social Media Links */}
  <div className="middle-section p-4 ">
    <h2 className="text-lg font-bold">Virtual Identity</h2>
    {/* Insert QR code image here */}
    <div className="qr-code">
      {/* QR code image */}
    </div>
    <h2 className="text-lg font-bold mt-4">Social Media</h2>
    <div className="social-links">
      {/* Insert social media icons/links here */}
    </div>
  </div>

  {/* Bottom Section: Short Bio, Interests, and Skills */}
  <div className="bottom-section p-4">
    <h2 className="text-lg font-bold">About Me</h2>
    <p>
      I'm Neon Nova, a tech enthusiast and creative mind. I love exploring the
      virtual world and pushing the boundaries of imagination. My interests
      include AI, virtual reality, and digital art.
    </p>
    <h2 className="text-lg font-bold mt-4">Skills</h2>
    <ul className="skills-list">
      <li>Web Development</li>
      <li>Graphic Design</li>
      <li>Virtual Reality Programming</li>
    </ul>
  </div>
</div>

{/* <div className="image-section p-4">
    <img
      src={Img}
      alt="Profile Image"
      className=" w-100 h-40 object-cover"
    />
  </div> */}

        </div>
    </div>
  )
}

export default Profile
