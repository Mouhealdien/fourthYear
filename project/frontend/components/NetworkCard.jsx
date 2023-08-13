import React from 'react'

const NetworkCard = ({profilePic,name,job}) => {
  return (
    <div className=' flex  flex-row'>
       
        <div class=" py-5  px-2 md:px-5 max-w-xs  border border-gray-300 rounded-md shadow  bg-white ">
          
          <div class="flex flex-col items-center pb-5 ">
              <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Bonnie image"/>
              <h5 class="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{job}</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                  <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium transition duration-300 text-center text-white  bg-secondary rounded-lg  focus:ring-4 focus:outline-none hover:bg-black ">Connect</a>
                  <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium transition duration-300  text-center text-white bg-primary border border-gray-300 rounded-lg focus:ring-4 focus:outline-none hover:bg-black ">Message</a>
              </div>
          </div>
        </div>
    </div>
  
  )
}

export default NetworkCard