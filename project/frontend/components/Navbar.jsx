import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse ,faUserGroup, faBriefcase, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Navbar = () => {

    const icons=[
      {
        icon: faUserGroup,
        title: "Network",
        path:'/networks'
      },
      {
        icon: faBriefcase,
        title: "Jobs",
        path:'/jobs'
      },
      {
        icon: faCommentDots,
        title: "Chat",
        path:'/chat'
      },
      {
        icon: faUser,
        title: "Profile",
        path:'/profile'
      }
    ]
  return (
    
<nav className=" border-gray-200  bg-primary fixed w-full z-20 top-0 left-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images" className="h-8 mr-3" alt="Website Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WebSite Name</span>
    </a>
    
    <div className="   block w-auto" id="navbar-default">
      <ul className="font-medium flex   p-0 mt-4 bg-gray-50 flex-row space-x-4  md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary md:dark:bg-primary gap-5 dark:border-gray-700">
            {
              icons.map((e)=>{
                return(
                  <li>
                  <Link href={e.path}>
                  <div className=' transition duration-300 hover:text-secondary  text-white flex flex-col'>
                      <FontAwesomeIcon className='  text-xl ' icon={e.icon} />
                      <h4 className=' text-sm '> {e.title} </h4>
                  </div>
                  </Link>

                </li>
                )
                
              })
            }
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar