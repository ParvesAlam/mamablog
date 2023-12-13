import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



function SinglePost() {
  const [blog, setBlog] = useState({});
  const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/post/get/${id}`); 
        setBlog(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='flex justify-center items-center m-2'>
      <div
        className="relative container mx-autos w-1/2 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] white:bg-neutral-700">
     
          <img
            className="rounded-t-lg object-fill w-full h-80"
            src={blog.img}
            alt="" />
      
        <div className="p-6">
          <h5
            className="mb-2 pl-2 text-3xl font-medium border-l-4 border-indigo-500">
            {blog.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600  text-justify">
            {blog.description}
          </p>
            <Link
                to={"/home"}
              type="button"
              className="fixed top-28 left-50  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              
              
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
