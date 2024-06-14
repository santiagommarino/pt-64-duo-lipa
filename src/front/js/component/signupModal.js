import React from 'react';
import '../../styles/signupModal.css';
import { useState } from 'react';

export function SignupModal({ closeModal }) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        fetch(process.env.BACKEND_URL + 'signup', {
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
              sessionStorage.setItem('userInfo', JSON.stringify(data.user_info));
              closeModal(true);
            } else {
              throw new Error(data[0].error);
            }
          })
          .catch(error => {
            console.error('Error:', error); 
          });
      };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal(false)}>&times;</span>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                        onChange={(e) => setUsername(e.target.value)} value={username} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={handleSignUp} type="button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}