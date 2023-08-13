import React from 'react'
import NetworkCard from '../../components/NetworkCard';
import {person} from '../../public/assets/person.jpg'
import Navbar from '../../components/Navbar'
import ProfileCard from '../../components/ProfileCard'
const index = () => {
    const networks=[
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
  return (
    <div className=' bg-background font-semibold' >
        <Navbar/>
        <div className=' py-5  px-5  flex flex-col items-center justify-center md:items-baseline md:flex-row gap-20 mt-24'>
        <ProfileCard/>
            <div className=' flex flex-row items-center justify-center   flex-wrap gap-5'>
                {
                    networks.map((e)=>{
                        return(
                            <NetworkCard profilePic={e.profilePic} name={e.name} job={e.job} />
                        )
                    })
                }
            </div>
          
        </div>
        
    </div>
    
    
  )
}

export default index