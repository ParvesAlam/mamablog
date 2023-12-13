import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import Toast from '../Utils/Toaster';

function CreatPostForm() {
    const { register, handleSubmit,reset } = useForm()
    const [showToast, setShowToast] = useState(false)
    const token = localStorage.getItem('token');

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('img', data.img[0]);

            const res = await axios.post('http://localhost:8000/api/post/create', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': token
                },
            });

            
            reset()
            if (res.status === 200) {
                setShowToast(true)
            }


          } catch (error) {
            // Handle error
            console.error('Error posting data:', error);
        }
        
    }
    
  return (
        <div style={{width: "700px"}}>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='flex justify-center items-center w-full flex-col gap-2 bg-white border rounded-lg shadow bg-gray-300 p-10'>
                <h4 className='font-bold'>Create a Post</h4>
                    <div className='m-5 w-full text-black'>
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Title:</label>
                    <input className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500'  {...register("title")} placeholder="Title of the Blog" required/>

                    </div>
                    <div className='mb-5 w-full text-black'>
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Description:</label>
                    <textarea className='w-full pl-3 h-40 rounded-md border-solid border-2 border-teal-500' {...register("description")} placeholder="Write description here..." required/>
                    </div>
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Image:</label>
                        <input type="file" className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("img")} placeholder="image" required/>
                    </div>
                    
                    <input className='w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold  py-2 px-6 rounded-md' type="submit" />
                
                </div>
            </form> 
            {
                showToast && <Toast  message={"Successfully Created Post"} type={"success"} showToast={showToast} setShowToast={setShowToast} />
            }   
        </div>
    )
}

export default CreatPostForm