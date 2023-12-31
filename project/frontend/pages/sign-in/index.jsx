import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
const index = () => {

    const [type, setType]=useState("company");
  return (

    
   
    <section class="bg-white ">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"}}>
            </div>
    
            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                        Get your free account now.
                    </h1>
    
                    <p class="mt-4 text-gray-500 ">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>
    
                    <div class="mt-6">
                        <h1 class="text-gray-500 ">Select type of account</h1>
    
                        <div class="mt-3 md:flex md:items-center md:-mx-2">
                            <button onClick={()=>{setType("company")}} className={`flex justify-center w-full px-6 py-3 transition duration-500  ${type=="company"?'bg-secondary text-white':'bg-white text-secondary'} rounded-md md:w-auto md:mx-2 focus:outline-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
    
                                <span class="mx-2">
                                    Company
                                </span>
                            </button>
    
                            <button onClick={()=>{setType("worker")}} className={`flex justify-center w-full px-6 py-3 transition duration-500   ${type=="worker"?'bg-secondary text-white':'bg-white text-secondary'} rounded-md md:w-auto md:mx-2 focus:outline-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
    
                                <span class="mx-2">
                                    worker
                                </span>
                            </button>
                        </div>
                    </div>
                      
                    <form className=' grid grid-cols-1 gap-6 mt-8 md:grid-cols-2' >
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">{type=="worker"?"First Name":"Company Name"}</label>
                            <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border outline-none border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
    
                       {type=="worker"? <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Last name</label>
                            <input type="text" placeholder="Snow" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>:""}
    
                        {type=="worker"?<div>
                            <label class="block mb-2 text-sm text-gray-600 ">Phone number</label>
                            <input type="text" placeholder="XXX-XX-XXXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>:''}
    
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                            <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
    
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
    
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 ">Confirm password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <Link href="/networks">
                            <button
                                class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign in </span>
        
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                        
                    </form>
                    <div class=" py-6 text-sm font-medium text-gray-500 ">
                         Have an account? <Link href="/log-in" class="text-secondary hover:underline ">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default index