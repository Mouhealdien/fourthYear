import React from 'react'
import PostCard from '../../components/PostCard'
import Navbar from '../../components/Navbar'
import ProfileCard from '../../components/profileCard'
import NetworkCard from '../../components/networkCard'
import Link from 'next/link'
const index = () => {
    const jobs=[1,2,3]

    const friends=[
        {
            profilePic:"person",
            name:" Saleh Ahmad",
            job:" Backend Developer"
        },
        {
            profilePic:"person",
            name:" Sara Ali",
            job:" Frontend Developer"
        },
        {
            profilePic:"person",
            name:" Ali Ahmad",
            job:" Flutter Developer"
        },
        {
            profilePic:"person",
            name:" Sara Ali",
            job:" Frontend Developer"
        },
    ]
  return (
    <div className=' bg-background'>
    <Navbar/>
        
        <div className='py-5  px-5  flex flex-col items-center md:items-start   md:flex-row gap-20  mt-24'>
            <ProfileCard/>
            <div class="flow-root w-full ">
                    <ul role="list" className="flex flex-col items-center justify-center gap-5">
                        {
                            jobs.map((e)=>{
                                return(
                                    <li className=''>
                                        <PostCard/> 
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                </div>
                <div className=' hidden xl:block border border-gray-300  shadow p-5 w-full bg-white'>
                    <h2 className='mb-1 text-xl font-medium text-gray-900 ' >Connections</h2>
                    <div  className=' flex flex-row gap-2 w-full items-center justify-center  flex-wrap py-4  '>
                        
                        {
                            friends.map((e)=>{
                                return(
                                    <NetworkCard profilePic={e.profilePic} name={e.name} job={e.job} />
                                )
                            })
                        }
                    </div>
                    <Link href="/networks" class="  inline-flex items-center px-7 py-2 text-lg font-medium transition duration-300 text-center text-white  bg-secondary rounded-lg  focus:ring-4 focus:outline-none hover:bg-black ">More &rarr;</Link>

                </div>
             
        </div>
    </div>
  )
}

export default index