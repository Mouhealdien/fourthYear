import Link from 'next/link'
import React from 'react'

const ProfileCard = () => {
  return (
    
        <div class="w-full py-5 max-w-xs  h-96 border border-gray-200 rounded-md shadow  bg-white dark:border-gray-700 ">
            <div class="flex flex-col items-center pb-5 ">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 "><Link href="./profile">Mouhealdien Alamein</Link></h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</span>
                
        
            </div>
            <div class="flex flex-col justify-start items-start mt-4 px-5  md:mt-6">
                <Link href="/friends">
                    <div className=' flex flex-row   pb-2  gap-10 transition duration-300 hover:text-secondary'>
                    
                            <p className=' '>Your Connections </p>
                            <p> 45</p>
                    </div>
                     </Link>
                    
                    <Link href="/networks">
                    <div className=' flex flex-row pt-2  gap-10 transition duration-300 hover:text-secondary'>
                    
                            <p>Add Connection</p>
                            <p>+</p>
                     </div>
                    </Link>
                    
                </div>
        </div>
    
  )
}

export default ProfileCard