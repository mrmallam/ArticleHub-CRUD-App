
import React, { useState, useEffect } from 'react'

function Forms() {
  const [info, setInfo] = useState({usernmae:'', password:''})

  useEffect(() => {
    console.log('UseEffect is here.')


  }, [info.password])

  return (
    <div className="w-full h-full  m-10 flex justify-center align-middle">
      
      <div className="  flex flex-col md:items-center">

        <input 
          className=" m-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type='text' 
          value={info.name} 
          onChange={(e) => setInfo({...info, name:e.target.value})} 
          placeholder='username'/>

        <input 
          className=" m-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type='password' 
          value={info.password} 
          onChange={(e) => setInfo({...info, password:e.target.value})} 
          placeholder='password' />

      

        <h2 className=' text-3xl text-blue-400 font-bold' >Username: <span className='text-blue-200'>{info.name}</span></h2>
        <h2 className=' text-3xl text-blue-400 font-bold'>Password: <span className='text-blue-200'>{info.password}</span></h2>
      </div>


      {/* <button className=" m-6 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Click Me
      </button> */}


    </div>
  )
}

export default Forms

