import React from 'react';
import '../../styles/loginModal.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';


export function ReviewCard(review) {
    const { store, actions } = useContext(Context);
    if (review.game){
        review = review.game;
    }
    else{
        review = review.review;
    }

    return (
        <div className="row g-0">
            <div className="card my-3 mx-auto" style={{ maxWidth: "540px" }}>
                <div className="d-flex align-items-center">
                    <div className="col-md-4 p-4">
                        <img
                            src={`//images.igdb.com/igdb/image/upload/t_cover_big/${review['cover_id']}.jpg`}
                            className="reviewsPic img-fluid rounded"
                            alt="..." onClick={() => window.location.href = `/game/${review['game_id']}`}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{review['game_name']}</h5>
                            <p className="card-text">
                                {review['review']}
                            </p>
                            <div className="card-text">
                                <small className="text-body-secondary d-flex">
                                    {review['username'] && <p onClick={() => window.location.href = `/user/${review['username']}`}>Review by <b>{review['username']}</b></p>}
                                    <div className="text-warning ps-2">
                                        {Array.from({ length: review['rating'] }, (v, i) => <i key={i} className="fas fa-star"></i>)}
                                        {Array.from({ length: 5 - review['rating'] }, (v, i) => <i key={i} className="far fa-star"></i>)}
                                    </div>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}