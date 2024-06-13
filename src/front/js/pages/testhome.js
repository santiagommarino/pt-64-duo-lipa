import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useEffect, useState } from "react";

export const Testhome = () => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem('jwtToken');

      if (!token) {
        setIsLogged(false);
        return;
      }

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


  function handleLogIn() {
    fetch(process.env.BACKEND_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
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
    sessionStorage.setItem('jwtToken', null);
    setIsLogged(false);
  }

  function handleSignUp() {
    fetch(process.env.BACKEND_URL + 'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => {
        if (response.ok && response.status === 200) { // Check if response is successful and has status 200
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error('Failed to sign up'); // Throw error if response is not successful
        }
      })
      .then(data => {
        // Check if a specific response is returned from the server
        if (data && data.success === true) {
          sessionStorage.setItem('jwtToken', data.access_token);
          setIsLogged(true);
        } else {
          throw new Error(data[0].error);
        }
      })
      .catch(error => {
        console.error('Error:', error); 
      });
  };


  return (
    <div className="text-center mt-5">
      <h1>Test Home</h1>
      {isLogged ? (
        <div>
          <h1>Welcome, {userInfo.email}</h1>
          <p>Email: {userInfo.email}</p>
          {/* Add more user-specific information here */}
          <button onClick={handleLogOut} type="button" className="btn">log out</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, Guest</h1>
          <p>Please log in to see more information</p>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">email</span>
            </div>
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"
              onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">password</span>
            </div>
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button onClick={handleLogIn} type="button" className="btn">log in</button>
          <button onClick={handleSignUp} type="button" className="btn">sign up</button>
        </div>
      )}
    </div>
  );
}
