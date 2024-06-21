import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const HomeLoggedIn = ({ logout }) => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    setUserInfo(storedUserInfo);
  },[]);

  function handleLogOut() {
    logout();
  }

  return (
    <div className="banner text-center mb-4  ">
      <div className="card text-bg-dark">
        <img src={rigoImageUrl} className="card-img" alt="..." />
        <div className="card-img-overlay align-bottom">
          <h5 className="card-title">welcome, {userInfo ? userInfo.username : ''}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button onClick={handleLogOut} type="button" className="btn">Log out</button>
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {" "}
        {/*list of popular games. click to go to game page*/}
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
          </div>
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