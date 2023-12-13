import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios';
import Toast from '../../Utils/Toaster';

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit,reset } = useForm()
    const [showToast, setShowToast] = useState(false)
    const [toasterValue, setToasterValue] = useState({
      text: "",
      type: ""
    })

    const onSubmit = async (data) => {

      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('img', data.img[0]);

      try {
          const res = await axios.post('http://localhost:8000/api/user/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });

          if (res.status === 200) {
              reset();
              setToasterValue({
                text: "Register successful",
                type: "success"
              });
              setShowToast(true)
              navigate(`/login`);
          }
        } catch (error) {
          // Handle error
          if (error) {
            setToasterValue({
              text: error.response.data.message,
              type: "error"
            });
            setShowToast(true)
          }
        }
    }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
    <div className="md:w-1/3 max-w-sm">
      <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" srcset="" />
    </div>
    <div className="md:w-1/3 max-w-sm">
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-center items-center w-full flex-col gap-2 bg-white border rounded-lg shadow bg-gray-300 p-10'>
                      <div className="text-center pb-2 border-b-2 border-teal-500 w-full">
                        <label> Register</label>
                        
                      </div>
                    <div className='m-5 w-full text-black'>
                      <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>First Name:</label>
                      <input className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500'  {...register("firstName")} placeholder="your first name" required/>
                    </div>
                    <div className='mb-5 w-full text-black'>
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Last Name:</label>
                        <input className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500' {...register("lastName")} placeholder="your last name" required/>
                    </div>
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Email:</label>
                        <input  className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("email")} placeholder="your email" required/>
                    </div>
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Password:</label>
                        <input name="password" type="password" className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("password")} placeholder="********" required/>
                    </div>
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Image:</label>
                        <input type="file" className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("img")} placeholder="image" required/>
                    </div>
                    <input className='w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold  py-2 px-6 rounded-md' type="submit" />
                
        </div>
      </form> 
      
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
        Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to={"/login"}>Login</Link>
      </div>
      {
        showToast && <Toast  message={toasterValue.text} type={toasterValue.type} showToast={showToast} setShowToast={setShowToast} />
      }
    </div>
  </section>
  )
}

export default Register