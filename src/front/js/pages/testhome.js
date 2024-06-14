import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import { SignupModal } from "../component/signupModal.js";
import { LoginModal } from "../component/loginModal.js";

export const Testhome = () => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSignupModal = (isLogged) => {
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
    setIsLogged(isLogged);
  };

  const handleLoginModal = (isLogged) => {
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
    setIsLogged(isLogged);
  }

  useEffect(() => {
    let token = sessionStorage.getItem('jwtToken');
    let userInfo = sessionStorage.getItem('userInfo');
    setUserInfo(userInfo);
    if (!token) {
      return;
    }
    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem('jwtToken');
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
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [isLogged]);
  
  function handleLogOut() {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('userInfo');
    setEmail('');
    setPassword('');
    setUserInfo(null);
    setIsLogged(false);
  }

  return (
    <div className="text-center mt-5">
      <h1>Test Home</h1>
      {userInfo ? (
        <div>
          <h1>Welcome, {userInfo.username}</h1>
          <p>Email: {userInfo.email}</p>
          {/* Add more user-specific information here */}
          <button onClick={handleLogOut} type="button" className="btn">log out</button>
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