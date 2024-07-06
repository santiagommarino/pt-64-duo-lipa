import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import banner from "../../img/stray_banner.jpg"
import { SignupModal } from "../component/signupModal.js";
import { LoginModal } from "../component/loginModal.js";


export const HomeLoggedOff = ({}) => {
  const { store, actions } = useContext(Context);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const popularGameElements = [];

  const handleSignupModal = () => {
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
  };

  const handleLoginModal = () => {
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
  };

  for (let i = 0; i < 8; i++) {
    if (store.popularGames && store.popularGames[i]) {
      popularGameElements.push(
        <div className="card mx-auto p-2" style={{ marginRight: "18rem" }} key={store.popularGames[i].id}>
          <a href={`/game/${store.popularGames[i].id}`}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames[i].image_id}.jpg`} className="card-img-top" alt={store.popularGames[i].name} />
          </a>
        </div>
      );
    }
  }

  return (
    <div className="banner text-center mb-4  ">
      <div className="card text-bg-dark">
        <img src={banner} className="card-img" alt="..." />
        <div className="card-img-overlay align-bottom">
          <button onClick={handleSignupModal} type="button" className="btn"><b>sign up</b></button>
          {isSignupModalOpen && <SignupModal closeModal={handleSignupModal} />}
          <button onClick={handleLoginModal} type="button" className="btn"><b>log in</b></button>
          {isLoginModalOpen && <LoginModal closeModal={handleLoginModal} />}
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {" "}
        {/*list of popular games. click to go to game page*/}
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          {popularGameElements}
        </div>
      </div>
      <div className="container text-center ">
        {/*list website features*/}
        <div className="row row-cols-3">
          <div className="col px-1 my-1">
            <div className="col bg-secondary">
              1 feature
            </div>
          </div>
          <div className="col px-1 my-1">
            <div className="col bg-secondary">
              2 feature
            </div>
          </div>
          <div className="col px-1 my-1">
            <div className="col bg-secondary">
              3 feature
            </div>
          </div>
          <div className="col px-1 my-1">
            <div className="col bg-secondary">
              4 feature
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="card my-3 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="d-flex">
            <div className="col-md-4">
              <img
                src={rigoImageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="card my-3 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="d-flex">
            <div className="col-md-4">
              <img
                src={rigoImageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="card my-3 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="d-flex">
            <div className="col-md-4">
              <img
                src={rigoImageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="card my-3 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="d-flex">
            <div className="col-md-4">
              <img
                src={rigoImageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};