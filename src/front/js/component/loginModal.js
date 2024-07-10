import React from 'react';
import '../../styles/loginModal.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

export function LoginModal({ closeModal, show }) {
  if(!show) return null;
  
  const { store, actions } = useContext(Context);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    await actions.handleLogin(login, password);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => closeModal()}>&times;</span>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username or Email:</label>
          <input type="text" className="form-control" placeholder="Username or Email" aria-label="Username" aria-describedby="basic-addon1"
            onChange={(e) => setLogin(e.target.value)} value={login} />
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <button onClick={() => handleLogin(login, password)} type="button">Log In</button>
        </form>
      </div>
    </div>
  );
}