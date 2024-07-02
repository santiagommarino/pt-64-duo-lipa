import React from 'react';
import '../../styles/signupModal.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

export function SignupModal({ closeModal, show }) {
    if(!show) return null;

    const {store, actions} = useContext(Context);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        actions.handleSignUp(username, email, password);
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