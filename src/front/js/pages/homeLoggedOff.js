import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import banner from "../../img/stray_banner.jpg"

export const HomeLoggedOff = ({ logout }) => {
  const { store, actions } = useContext(Context);
  const popularGameElements = [];

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
      <div className="features container text-center ">
        {/*list website features*/}
        <div className="featureOne row row-cols-3">
          <div className="col-6 px-1 my-1">
            <div className="col bg-secondary pt-2 d-flex justify-content-center">
              <i class="fa-solid fa-heart fa-2xl p-4 "></i> <p>Express your admiration for the games you love</p>
            </div>
          </div>
          <div className=" col-6 px-1 my-1">
            <div className="featureTwo col bg-secondary pt-2 d-flex justify-content-center">
               <i className="fa-solid fa-align-left fa-2xl p-4 justify-content-center"></i> <p>Write and share reviews</p>
            </div>
          </div>
          <div className="col-6 px-1 my-1">
            <div className="col bg-secondary pt-2 d-flex  justify-content-center">
             <i className=" fa-solid fa-star fa-2xl p-4 justify-content-center"></i> <p className="loveFeature d-flex justify-content-center">Rate each game using a five-star rating system</p>
            </div>
          </div>
          <div className="col-6 px-1 my-1">
            <div className="col bg-secondary pt-2 d-flex justify-content-center">
            <i class="fa-solid fa-user-plus fa-2xl p-4 justify-content-center"></i><p>Follow your friends and other members</p>
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