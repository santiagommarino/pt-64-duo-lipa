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
    console.log('handleSignupModal');
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
    console.log('isSignupModalOpen:', isSignupModalOpen);
    setIsLogged(isLogged);
  };

  const handleLoginModal = (isLogged) => {
    console.log('handleLoginModal');
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
    console.log('isLoginModalOpen:', isLoginModalOpen);
    setIsLogged(isLogged);
  }

  useEffect(() => {
    console.log('isLogged:', isLogged)
    console.log('userInfo:', userInfo)
    console.log('email:', email)
    console.log(sessionStorage.getItem('jwtToken'))
    let token = sessionStorage.getItem('jwtToken');
    let userInfo = sessionStorage.getItem('userInfo');
    setUserInfo(userInfo);
    if (!token) {
      console.log('no token')
      return;
    }
    const fetchUserInfo = async () => {
      console.log('fetchUserInfo')
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
          console.log('response:', response);
          const data = await response.json();
          console.log('data:', data);
          setUserInfo(data.user_info);
        } else {
          throw new Error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        console.log('finally')
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [isLogged]);

  function handleLogIn() {
    fetch(process.env.BACKEND_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username
      }),
    })
      .then(response => {
        if (response.ok) { // 
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error('Failed to log in'); // Throw error if response is not successful
        }
      })
      .then(data => {
        // Check if a specific response is returned from the server
        if (data && data.success === true) {
          sessionStorage.setItem('jwtToken', data.access_token);
          sessionStorage.setItem('userInfo', JSON.stringify(data.user_info));
          setUserInfo(data.user_info);
          setIsLogged(true);
        } else {
          console.log(data)
          throw new Error(data[0].error); // Throw error if unexpected response
        }
      })
      .catch(error => {
        console.error('Error:', error); // Handle error
      });
  };

  function handleLogOut() {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('userInfo');
    setEmail('');
    setPassword('');
    setUserInfo(null);
    setIsLogged(false);
  }

  function handleConsoleLog() {
    console.log('isLogged:', isLogged)
    console.log('userInfo:', userInfo)
    console.log('email:', email)
    console.log(sessionStorage.getItem('jwtToken'))
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
          <button onClick={handleConsoleLog} type="button" className="btn">Console log</button>
        </div>
      )}
    </div>
  );
}