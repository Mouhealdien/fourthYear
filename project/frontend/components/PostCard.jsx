import React from 'react'
import front from  '../public/assets/front.png'
const PostCard = () => {

    const req=["- B.Sc in Software Engineering, Computer Science, Software Engineering or equivalent. ",
        "- 3+ Years of experience as a Software Engineer." ,
        "- Good understanding of Cloud Engineering [ AWS ] ",
        "- Strong proficiency in HTML, CSS and JavaScript. ",
        "- Good experience with ReactJS. ",
        "- Good understanding of web design and UX. ",
       "- Experience working with version control using Git." 
    ]
    
  return (

<div class="max-w-md bg-white border border-gray-300  shadow ">  
<div className=' p-4 gap-5 items-center flex flex-row'>
        <div class="flex-shrink-0">
                <img class="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Neil image"/>
        </div>
        <p class="text-sm font-medium text-gray-900 truncate ">
            Bld.Ai
        </p>
        </div>
    <div class="px-5 py-1">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">We Are Hiring FrontEnd Developer</h5>
        </a>
        <ul>
            {
                req.map((e)=>{
                    return(
                        <li class="mb-3 font-normal text-gray-700 ">{e}</li>

                    )
                })
            }
        </ul>
    </div>
    <a href="#">
        <img className=" " src='https://www.w2ssolutions.com/blog/wp-content/uploads/2019/10/frontend-backend-fullstack.png' alt="" />
    </a>
    <div className=' flex items-center justify-center space-x-3  py-4 border-t-2 border-gray-400'>
    <a href="#" class="inline-flex items-center px-5 py-2 text-base font-medium transition duration-300  text-center text-white  bg-secondary border border-gray-300 rounded-lg focus:ring-4 focus:outline-none hover:bg-black ">Apply</a>
    <a href="#" class="inline-flex items-center px-5 py-2 text-base font-medium transition duration-300  text-center text-white bg-primary border border-gray-300 rounded-lg focus:ring-4 focus:outline-none hover:bg-black ">Message</a>
    </div>
</div>


  )
}

export default PostCard