import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useUser } from '../../context/UserContext';


function Login() {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const { register, handleSubmit } = useForm()
    

    const onSubmit = async (data) => {
      try {
        const res = await axios.post('http://localhost:8000/api/user/login', data);
  
        if (res.status === 200) {
          const { token } = res.data;
          // Store the token in local storage or state for later use
          localStorage.setItem('token', token);
          if (res.status === 200) {

            // Fetch user data after login
            const userResponse = await axios.get('http://localhost:8000/api/user/login/user-details', {
              headers: {
                authorization: token,
              },
            });
            const userData = userResponse.data;
            setUserData(userData); 
            navigate("/home");
          }
          // Redirect or perform additional actions upon successful login
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
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
                      <div className="text-center">
                        <label className="m-2 text-center"> Login</label>
                      </div>
                   
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Email:</label>
                        <input  className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("email")} placeholder="your email" required/>
                    </div>
                    <div className='mb-5 w-full text-black'> 
                        <label className='block mb-2 text-sm font-blod text-black dark:text-black-500'>Password:</label>
                        <input name="password" type="password" className='w-full pl-3 h-10 rounded-md border-solid border-2 border-teal-500 py-0.5' {...register("password")} placeholder="********" required/>
                    </div>
                    
                    <input className='w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold  py-2 px-6 rounded-md' type="submit" />
                
        </div>
      </form> 
      
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
        Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to={"/register"}>Register</Link>
      </div>
      
    </div>
  </section>
  )
}

export default Login;