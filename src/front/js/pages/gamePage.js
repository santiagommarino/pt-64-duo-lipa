import React, { useContext } from "react";
import { Context } from "../store/appContext";
import shootinGame from "../../img/cod.png";
import "../../styles/home.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const GamePage = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const handleReviewModal = () => {
        isReviewModalOpen ? setIsReviewModalOpen(false) : setIsReviewModalOpen(true);
    };

    const fetchGameDetails = async () => {
        const response = await fetch(process.env.BACKEND_URL + 'fetch_game/' + id);
        if (response.ok) {
            const data = await response.json();
            setGame(data);
        }
    };

    useEffect(() => {
        actions.handleFetchUserInfo();
        fetchGameDetails();
    }, [id]);

    return (
        <div>
            <div className="gameBanner text-bg-dark mb-4">
                <img src={shootinGame} className="banner-img d-block mx-auto" alt="..." style={{ width: '600px', height: '300px' }} />
            </div>
            <div className="card mb-3" style={{ width: '540px' }} />
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={shootinGame} className="img-fluid rounded-start" alt="..." />
                </div>
                <br></br>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="row friendsrReviews mt-4">
                <div className="col-md-8">
                    <div className="card-body border">
                        <h5 className="card-title">friends Reviews</h5>
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
                <div className="col-md-8">
                    <div className="card-body border">
                        <h5 className="card-title">friends Reviews</h5>
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
                <div className="col-md-8">
                    <div className="card-body border">
                        <h5 className="card-title">friends Reviews</h5>
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
