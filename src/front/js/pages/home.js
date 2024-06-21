import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import { SignupModal } from "../component/signupModal.js";
import { LoginModal } from "../component/loginModal.js";
import { HomeLoggedOff } from "./homeLoggedOff.js";
import { HomeLoggedIn } from "./homeLoggedIn.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
      return;
    }
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(process.env.BACKEND_URL + 'protected', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data.user_info); 
          sessionStorage.setItem('userInfo', JSON.stringify(data.user_info));
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="text-center mt-5">
      {userInfo.email ? <HomeLoggedIn logout={() => actions.handleLogOut()}/> : <HomeLoggedOff/>}
    </div>
  );
}            