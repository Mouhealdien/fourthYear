import React from 'react'

const FriendsCard = ({profilePic,name,job}) => {
  return (
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            {name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {job}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium transition duration-300  text-center text-white bg-primary border border-gray-300 rounded-lg focus:ring-4 focus:outline-none hover:bg-black ">Message</a>
                    </div>
                </div>
         
           


  )
}

export default FriendsCard