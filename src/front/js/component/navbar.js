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
      <nav className="navbar navbar-expand-lg ps-4 mb-2 ">
        <div className="container-fluid">
          <Link to="/" >Logo</Link>
          {userInfo ?
            <span onClick={handleLogOut} type="button" className="ms-2">Log out</span>
            :
            <>
              <span className="ms-2 cursor" onClick={handleSignupModal}>Sign up</span>
              <span className="ms-2 cursor" onClick={handleLoginModal}>Log in</span>
            </>
          }
          <Link to="/search" className="text-decoration-none text-dark">Search</Link>
        </div>
      </nav>
      {isLoginModalOpen && <LoginModal closeModal={handleLoginModal} />}
      {isSignupModalOpen && <SignupModal closeModal={handleSignupModal} />}
    </>
  );
};
