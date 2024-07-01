import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
        const response = await fetch(process.env.BACKEND_URL + 'fetch_game/' + id);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setGame(data);
        }
    };

    fetchGameDetails();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.summary}</p>
      <img src={`//images.igdb.com/igdb/image/upload/t_1080p/${game.image_id}.jpg`} className="card-img-top" alt={game.name} />
    </div>
  );
};