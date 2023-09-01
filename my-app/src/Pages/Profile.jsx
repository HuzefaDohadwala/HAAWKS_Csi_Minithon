import React from 'react'
import "./Profile.css";

const Profile = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center parent">
        
        <div className="flex rounded-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 overlay">

          <div className='sidebar w-1/3 border-r-2 text-[#FFFFFF] font-neuropol' >
            <div className="sidebar-top border-b-2
            flex justify-center items-center">
              <div className="sidebar-logo w-1/3 h-[100px] bg-black-700 rounded-full mr-4 mb-4">
                      
              </div>
              <div className="sidebar-top-content w-1/2 h-[160px] ">
                <h1 className='text-xl mt-6'>Neon Nova</h1>
                <p className='text-sm '>Citizen Id: #7pq4757g</p>
                <p className='text-sm  '>Balance : 4756.22$</p>
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
          
          </div>
        </div>
    </div>
  )
}

export default Profile
