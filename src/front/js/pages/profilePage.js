import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gameImage from "../../img/assasinsCreed.png";
import shootinGame from "../../img/cod.png";
import blocksImage from "../../img/minecraft.png";

export const ProfilePage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="profilePic row">
                <div className=" col-6">
                    <div className="card" style={{ width: "18rem", borderRadius: "50%" }}>
                        <img src={rigoImageUrl} className="card-img-top rounded-circle" height="200px" alt="..." />
                    </div>
                </div>
                <div className=" col-6">
                    <span className="placeholder col-12 bg-primary text-dark">Name</span>
                    <span className="placeholder col-12 bg-primary text-dark">Usser Name</span>
                    <span className="placeholder col-12 bg-primary text-dark">Location</span>
                </div>
            </div>
            <div className="navbar">
                <nav className="navbar navbar-expand-lg bg-light w-100">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Games</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Disabled</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
            <br></br>
            <div className="row favGameList row- gx-4">
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
                <div className="card my-3 mx-auto" style={{ maxWidth: "440px" }}>
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

                <div className="card my-3 mx-auto" style={{ maxWidth: "440px" }}>
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
                <div className="card my-3 mx-auto" style={{ maxWidth: "440px" }}>
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

                <div className="card my-3 mx-auto" style={{ maxWidth: "440px" }}>
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
                                <h5 className="card-title">Game Reviews</h5>
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
            <div className="row"> 
                <ul className="following col-6">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
                <ul className="ollower col-6">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <br></br>
        </div>
    );
};