import { Context } from "../store/appContext";
import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useContext } from 'react';

export const UserProfile = () => {
    const { store, actions } = useContext(Context);
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [userGames, setUserGames] = useState(null);

    useEffect(() => {
        fetchDifferentUser(username);
    }, []);

    const fetchDifferentUser = async () => {
        const response = await fetch(process.env.BACKEND_URL + 'fetch_different_user/' + username);
        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            setUserGames(data.user_games);
        }
    }

    const handleFollow = () => {
        actions.handleFollow(store.user.id, user.id)
    }

    const handleUnfollow = () => {
        actions.handleUnfollow(store.user.id, user.id)
    }

    if (!user || !store.user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.username}</h1>
            {store.user.followed.includes(user.username) ? 
            <>
                <p>Following</p> 
                <button className='btn btn-primary' onClick={handleUnfollow}>Unfollow</button>
            </>: 
            <>
                <p>Not Following</p>
                <button className='btn btn-primary' onClick={handleFollow}>Follow</button>
            </>}

            <p>{user.email}</p>
            <h1>{user.username}'s reviews:</h1>
            <div className="row gameList row- gx-4">
                {userGames && userGames.map((game, index) => {
                    return (
                        <div className="card mx-auto p-2" style={{ marginRight: "18rem" }} key={game.id}>
                            <a href={`/game/${game.game_id}`}>
                                <img src={`//images.igdb.com/igdb/image/upload/t_1080p/${game.cover_id}.jpg`} className="card-img-top" alt={game.name} />
                            </a>
                            <p>review: {game.review}</p>
                            <p>rating: {game.rating}</p>
                            <p>like: {game.like}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};