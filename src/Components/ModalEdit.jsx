import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ModalEdit() {
  
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

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

  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append('title', data.title ? data.title : blog.title);
    formData.append('description', data.description ? data.description : blog.description);
    formData.append('img', data.file[0] ? data.file[0] : blog.img );
   
    try {
      const res =  await axios.put(`http://localhost:8000/api/post/update/${blog._id}`, formData,{
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.status === 200) {
        navigate(`/singlePost/${blog._id}`);
      }
      } catch (error) {
        // Handle error
        console.error('Error posting data:', error);
    }
    
  }
  return (
    <div className="flex justify-center items-center">
      <div style={{width: "700px"}} >
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center items-center w-full flex-col gap-2 bg-white border rounded-lg shadow bg-gray-300 p-10'>
              <div className='m-5 w-full text-black'>
                  <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Title:</label>
              <input defaultValue={blog.title} className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500'  {...register("title")} placeholder="Title of the Blog" required/>

              </div>
              <div className='mb-5 w-full text-black'>
                  <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Description:</label>
              <textarea defaultValue={blog.description} className='w-full pl-3 h-40 rounded-md border-solid border-2 border-teal-500' {...register("description")} placeholder="Write description here..." required/>
              </div>
              <div className='mb-5 w-full text-black'> 
                  <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Image:</label>
                  <input type="file" className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("file")} placeholder="image" />
              </div>
              
              <input className='w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold  py-2 px-6 rounded-md cursor-pointer' type="submit" />
              <Link to={"/dashboard"} className='w-full bg-green-500 text-center hover:bg-teal-600 text-white font-semibold  py-2 px-6 rounded-md'>Cancel</Link>
          </div>
      </form> 
      </div>
    </div>
  );
}