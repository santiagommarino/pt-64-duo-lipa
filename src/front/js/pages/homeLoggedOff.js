import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import { SignupModal } from "../component/signupModal.js";
import { LoginModal } from "../component/loginModal.js";

export const HomeLoggedOff = ({ login, signup }) => {
  const { store, actions } = useContext(Context);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSignupModal = () => {
    isSignupModalOpen ? setIsSignupModalOpen(false) : setIsSignupModalOpen(true);
  };

  const handleLoginModal = () => {
    isLoginModalOpen ? setIsLoginModalOpen(false) : setIsLoginModalOpen(true);
  };

  console.log('store.popularGames:' , store.popularGames?.length);

  return (
    <div className="text-center mt-5">
      <div className="card text-bg-dark">
        <img src={rigoImageUrl} className="card-img" alt="..." />
        <div className="card-img-overlay align-bottom">
          <h5 className="card-title">GUEST</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button onClick={handleSignupModal} type="button" className="btn">sign up</button>
          {isSignupModalOpen && <SignupModal closeModal={handleSignupModal} />}
          <button onClick={handleLoginModal} type="button" className="btn">log in</button>
          {isLoginModalOpen && <LoginModal closeModal={handleLoginModal} />}
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {/*games your friends have recently reviewed/played*/}
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[0].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[1].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[2].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[3].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {/*new releases*/}
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[4].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[5].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[6].image_id : ''}.jpg`} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames? store.popularGames[7].image_id : ''}.jpg`} className="card-img-top" alt="..." />
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
