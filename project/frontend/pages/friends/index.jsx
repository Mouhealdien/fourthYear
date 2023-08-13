import React from 'react'
import FriendsCard from '../../components/FriendsCard'
import ProfileCard from '../../components/ProfileCard'
import Navbar from '../../components/Navbar'
import person from '../../public/assets/person.jpg'
const friends=[
    {
    profilePic:person,
    name:" Saleh Ahmad",
    job:" Backend Developer"
},
{
    profilePic:person,
    name:" Sara Ali",
    job:" Frontend Developer"
},
{
    profilePic:person,
    name:" Ali Ahmad",
    job:" Flutter Developer"
},
{
    profilePic:person,
    name:" Ali Ahmad",
    job:" Flutter Developer"
},
{
    profilePic:person,
    name:" Ali Ahmad",
    job:" Flutter Developer"
},
{
    profilePic:person,
    name:" Ali Ahmad",
    job:" Flutter Developer"
},

]
const index = () => {
  return (
    <div className=' bg-background'>
        <Navbar/>
        <div className='py-5  px-5  flex flex-col items-center md:items-start   md:flex-row gap-20 mt-24'>
            <ProfileCard/>
            
            <div class="w-full max-w-5xl p-4 bg-white border border-gray-500 rounded-lg shadow sm:p-8 ">
                <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900">Friends</h5>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            friends.map((e)=>{
                                return(
                                    <li className='py-3 sm:py-4'>
                                        <FriendsCard profilePic={e.profilePic} name={e.name} job={e.job}  />
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default index