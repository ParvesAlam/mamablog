 import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ViewListBlog from './TableRowOfPost';


 
 function ListOfPost() {
    const [blogs, setBlogs] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const token = localStorage.getItem('token');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/post/get'); 
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [refresh]);

  const deletePost = async (id) => {
    
    try {
      const res = await axios.delete(`http://localhost:8000/api/post/delete/${id}`, {
        headers: {
          "Authorization": token
        }
      });
      if(res.status === 200){
          setRefresh(!refresh);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


   return (
   
    <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-teal-50 dark:bg-teal-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Blog Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
      {
      blogs?.getAllPost?.reverse().map((blog)=>(
        <ViewListBlog key={blog._id} blog={blog} deletePost={deletePost} />
      ))
    }  
    </table>

    
 
   )
 }
 
 export default ListOfPost