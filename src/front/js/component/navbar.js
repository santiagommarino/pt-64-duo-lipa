import React, { useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { SignupModal } from "./signupModal";
import { LoginModal } from "./loginModal";


export const Navbar = () => {

  const { store, actions } = useContext(Context);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    actions.handleFetchUserInfo();
  }, []);

  useEffect(() => {
    setUserInfo(sessionStorage.getItem("userInfo"));
  }, [store.user]);

  const handleSignupModal = () => {
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
  };

  const handleLoginModal = () => {
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
  };

  const handleLogOut = () => {
    actions.handleLogOut();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning ps-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userInfo ? 
            <button onClick={handleLogOut} type="button" className="btn btn-primary ms-2">Log out</button>
            : 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-primary ms-2" onClick={handleSignupModal}>Sign up</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary ms-2" onClick={handleLoginModal}>Log in</button>
              </li>
            </ul> 
            }
            <Link to="/search" className="btn btn-primary ms-2">Search</Link>
            <Link to="/" className="btn btn-primary ms-2">Home</Link>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && <LoginModal closeModal={handleLoginModal} />}
      {isSignupModalOpen && <SignupModal closeModal={handleSignupModal} />}
    </>
  );
};
