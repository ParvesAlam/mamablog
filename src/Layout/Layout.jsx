import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Footer from '../Pages/Footer/Footer'
import Header from '../Pages/Header/Header'
import Routers from '../routes/Routes'

function Layout() {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  useEffect(() => {
    // Check for token on page load
    const token = localStorage.getItem('token');

    if (token) {
      const fetchUserData = async () => {
        try {
          const userResponse = await axios.get('http://localhost:8000/api/user/login/user-details', {
            headers: {
              authorization: token,
            },
          });
          const userData = userResponse.data;
          setUserData(userData); 
          navigate("/home");
        } catch (error) {
          // Handle error if unable to fetch user data
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [setUserData]);
  return (
    <div>
        <Header/>
            <Routers/>
        <Footer/>
    </div>
  )
}

export default Layout