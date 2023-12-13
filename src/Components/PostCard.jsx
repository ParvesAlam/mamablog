import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({blog})=> {
  const {title, img, description, _id} = blog

  return (
      <div
        className="bg-gradient-to-r from-cyan-500 to-teal-500 m-2 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
          <img
            className="rounded-t-lg object-fill h-48 w-full"
            src={img}
            alt="" />
        
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-justify">
           {description.slice(0, 200)}...<Link
            to={`/singlePost/${_id}`}
              type="button"
              className=" hover:bg-gray-100 text-red-300 font-semibold py-1 px-2 border-gray-400 rounded shadow">
              Read More
        </Link>
          </p>
            
        </div>
        
      </div>
  );
}
export default PostCard