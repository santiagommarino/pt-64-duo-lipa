import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);

  console.log(store.user);
  console.log(store.user_games);

  return (
    <div>
      <h1>Welcome, {store.user && store.user.username}</h1>
      <p>Email: {store.user && store.user.email}</p>
      {/* Add more user-specific information here */}
      {/* Add a list of games the user has reviewed */}
      <h1>Your Reviews:</h1>
      <div className="row gameList row- gx-4">
        {store.user_games && store.user_games.map((game, index) => {
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