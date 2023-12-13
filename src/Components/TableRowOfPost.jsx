import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Utils/Modal'


function TableRowOfPost({blog,deletePost,}) {
    const [showModal, setShowModal] = useState(false);


    const handleDelete = () => {
        setShowModal(true);
      };

    const isConfirm = () =>{
        deletePost(blog._id)
    }

  return (
    
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-teal-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-teal-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={blog.img} alt="" srcset="" className="w-12 h-12 curcle rounded-full"/>
                </th>
                <td className="px-6 py-4">
                {blog.title}
                </td>
                <td className="px-6 py-4 group relative m-2 flex justify-center">
                    {blog.description.slice(0, 50)}...
                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{blog.description}</span>
                </td>
                <td className="px-6 py-4">
                <div className='flex gap-2'>
                <Link to={`update/${blog._id}`} className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Edit</Link>
                {/* Delete Modal */}
                <button
                    className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}
                >
                    Delete
                </button>
                
            </div>
                </td>
            </tr>
            {showModal &&  <Modal setShowModal={setShowModal} isConfirm={isConfirm}/>}
        </tbody>
    
  
    
  )
}

export default TableRowOfPost