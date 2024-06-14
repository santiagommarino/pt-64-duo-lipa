import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {/*welcome back user */}
      <div className="card text-bg-dark">
        <img src={rigoImageUrl} className="card-img" alt="..." />
        <div className="card-img-overlay align-bottom">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button type="button" class="btn btn-light">
            Sing up!
          </button>
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {/*games your friends have recently reviewed/played*/}
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
	  <br></br>
      <div className="row gameList row- gx-4">
        {/*new releases*/}
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
