import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import { SignupModal } from "../component/signupModal.js";
import { LoginModal } from "../component/loginModal.js";
import { HomeLoggedOff } from "./homeLoggedOff.js";
import { HomeLoggedIn } from "./homeLoggedIn.js";

export const Testhome = () => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSignupModal = () => {
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
  };

  const handleLoginModal = () => {
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
  }

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
      <h1>Test Home</h1>
      {userInfo ? (
        <div>
          <h1>Welcome, {userInfo.username}</h1>
          <p>Email: {userInfo.email}</p>
          <button onClick={() => actions.handleLogOut()} type="button" className="btn">log out</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, Guest</h1>
          <p>Please log in to see more information</p>
          <button onClick={handleLoginModal} type="button" className="btn">log in</button>
          {isLoginModalOpen && <LoginModal closeModal={handleLoginModal} />}
          <button onClick={handleSignupModal} type="button" className="btn">sign up</button>
          {isSignupModalOpen && <SignupModal closeModal={handleSignupModal} />}
        </div>
      )}
    </div>
  );
}            