import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import banner from "../../img/stray_banner.jpg"
import "../../styles/home.css";
import { useEffect, useState } from "react";

export const HomeLoggedIn = ({ logout }) => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);

  const popularGameElements = [];

  useEffect(() => {
    const storedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    setUserInfo(storedUserInfo);
  }, []);

  for (let i = 0; i < 4; i++) {
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
    <div className="banner body text-center mt-5">
        <div className="card text-bg-dark">
          <img src={banner} className="card-img" alt="..." />
          <div className="card-img-overlay align-bottom">
            <h1 className="card-title">welcome, {userInfo ? userInfo.username : ''}</h1>
          </div>
        </div>
        <br></br>
        <div className="row gameList row- gx-4">
          <div className="col-auto d-flex mx-auto p-4 gap-4 ">
            {popularGameElements}
          </div>
        </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {/*new releases*/}
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
