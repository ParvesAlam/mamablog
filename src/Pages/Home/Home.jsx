import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../Components/PostCard"
function Home() {
  const [blogs, setBlogs] = useState([]);

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
  }, []);
  


  return (
    <div className='container mx-auto min-h-max grid gap-4 grid-cols-3 grid-rows-3'>
      {
        blogs?.getAllPost?.reverse().map(blog=><PostCard key={blog._id} blog={blog}/>)
      }
        
      
    </div>
    
  )
}

export default Home