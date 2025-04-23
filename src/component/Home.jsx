import React from 'react'
import { useState } from 'react'

function Home() {
const [fullname, setFullname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword]= useState('')
const handlechange = (e)=>{
    const input= e.target
    const name = input.name
    const value = input.value
    if(name=="fullname")
        setFullname(value)

    if(name=="email")
        setEmail(value)

    if(name=="password")
        setPassword(value)

}
const signup = (e)=>{
    e.preventDefault()

    const payload = {
        fullname,
        email,
        password
    }
    console.log(payload);
    
}

  return (
    <div className='bg-gray-100 h-screen flex item-center justify-center'>
        <div className='bg-white p-12 rounded w-[450px] shadow-lg space-y-8'>
            <h1 className='text-semibold text-3xl'>Register Now</h1>
            <form className='flex flex-col gap-6' onSubmit={signup}>
                
        <input className='border border-gray-300 rounded p-3'
        placeholder='enter name'
        name="fullname"
        onChange={handlechange}
        />
        <small className='text-gray-500'>fullname</small>
         <input className='border border-gray-300 rounded p-3'
        placeholder='enter email'
        name="email"
        onChange={handlechange}
        />
        <small className='text-gray-500'>email</small>
         <input className='border border-gray-300 rounded p-3'
        placeholder='enter password'
        name="password"
        onChange={handlechange}
        />
        <small className='text-gray-500'>password</small>
        <button className='bg-green-600 px-8 py-3 text-white rounded'>Signup</button>
        </form>
        </div>
    </div>
  )
}

export default Home