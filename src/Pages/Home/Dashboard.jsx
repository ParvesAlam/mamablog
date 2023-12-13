import React, { useState } from 'react'
import CreatPostForm from '../../Components/CreatPostForm'
import TableOfPost from '../../Components/TableOfPost'

function Dashboard() {
  const [toggle, setToggle] = useState({
    create : false,
    view: false
  })

  return (
    <div className='container mx-auto  min-h-screen '>
        <div className=' '>
            <div className='flex justify-between'>
                <button onClick={()=> setToggle({
    create : true,
    view: false
  })} className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3 text-white'>Create Post</button>
                <button onClick={()=> setToggle({
    create : false,
    view: true
  })} className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3 text-white'>View Post</button>
            </div>
            <div className='flex justify-center items-center'>
              {
                toggle.create ?  <CreatPostForm/> : <TableOfPost/> 
                
              }
              
            </div>
        </div>
    </div>
  )
}

export default Dashboard