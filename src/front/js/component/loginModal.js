import React from 'react';
import '../../styles/loginModal.css';
import { useState } from 'react';

export function LoginModal({ closeModal }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {

        fetch(process.env.BACKEND_URL + 'login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: login,
            password: password,
            username: login
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
              closeModal(true);
            } else {
              console.log(data)
              throw new Error(data[0].error); // Throw error if unexpected response
            }
          })
          .catch(error => {
            console.error('Error:', error); // Handle error
          });
      };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal(false)}>&times;</span>
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Username or Email:</label>
                    <input type="text" className="form-control" placeholder="Username or Email" aria-label="Username" aria-describedby="basic-addon1"
                        onChange={(e) => setLogin(e.target.value)} value={login} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={handleLogin} type="button">Log In</button>
                </form>
            </div>
        </div>
    );
}