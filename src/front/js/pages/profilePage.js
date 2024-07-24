import React, { act, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import edImage from "../../img/edring.jpeg"
import payday from "../../img/payday.jpeg"
import redImage from "../../img/red.jpeg"
import gollum from "../../img/gollum.jpeg"
import { useParams } from "react-router-dom";
import { ReviewCard } from "../component/reviewCard.js";

export const ProfilePage = () => {
    const { store, actions } = useContext(Context);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        actions.handleFetchUserInfo();
    }, []);

    useEffect(() => {
        if (store.user) {
            actions.handleFetchUserReviews(store.user.id);
            actions.handleFetchFollowedUsersReviews(store.user.id);
        }
    }, [store.user]);

    useEffect(() => {
        if (store.searchResults) {
            setSearchResults(store.searchResults);
        }
    }, [store.searchResults]);

    const handleSearch = e => {
        e.preventDefault();
        actions.searchUsers(searchTerm);
    }

    if (!store.user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-2">
            <div className=" row">
                <div className=" col-2">
                    <div className="profilePic picture card border border-warning" style={{}}>
                        <img src={rigoImageUrl} className="card-img-top rounded-circle" height="200px" alt="..." />
                    </div>
                </div>
                <div className=" col-8 ">
                    <ul className="list-group list-group-flush ">
                        <li className="userInfo list-group-item " placeholder="Name">username: {store.user.username}</li>
                        <li className="userInfo list-group-item">email: {store.user.email}</li>
                        <li className="userInfo list-group-item">Followers: {store.user.followers.length}</li>
                        <li className="userInfo list-group-item">Following: {store.user.followed.length}</li>
                    </ul>
                </div>
            </div>
            {store.user_games && <h2>Your reviews:</h2>}
            <div className="row gameList row- gx-4">
                {store.userReviews && store.userReviews.map((game, index) => {
                    return (
                        <ReviewCard key={game.id} review={game} />
                    );
                })}
            </div>
            <br></br>
            {store.followedUsersReviews && <h2>Reviews from users you follow:</h2>}
            <div className="row gameList row- gx-4">
                {store.followedUsersReviews && store.followedUsersReviews.map((game, index) => {
                    return (
                        <ReviewCard key={game.id} review={game} />
                    );
                })}
            </div>

            <div className="row pt-4" >
                <ul className="following col-6 ">
                    <li className="list-group-item text-center"><h4><b>Followers</b></h4></li>
                    {store.user.followers.map((follower, index) => {
                        return (
                            <li onClick={() => window.location.href = `/user/${follower}`} className="list-group-item" key={index}><b>{follower}</b></li>
                        );
                    }, [])}
                </ul>
                <ul className="follower col-6">
                    <li className="list-group-item text-center"><h4><b>Following</b></h4></li>
                    {store.user.followed.map((following, index) => {
                        return (
                            <li onClick={() => window.location.href = `/user/${following}`} className="list-group-item" key={index}><b>{following}</b></li>
                        );
                    }, [])}
                </ul>
            </div>
            <br></br>
        </div>
    );
};

