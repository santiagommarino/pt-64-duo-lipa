import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import theWitcher from "../../img/thewitcher.jpeg"
import eldenring from "../../img/eldenring.jpg"
import banner from "../../img/stray_banner.jpg"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { ReviewCard } from "../component/reviewCard.js";
import { Carousel } from "../component/carousel.js";

export const HomeLoggedIn = ({ logout }) => {
  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);

  const popularGameElements = [];

  useEffect(() => {
    const storedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    setUserInfo(storedUserInfo);
  }, []);

  for (let i = 0; i < 6; i++) {
    if (store.popularGames && store.popularGames[i]) {
      popularGameElements.push(
        <div className="card mx-auto p-1" style={{ marginRight: "18rem" }} key={store.popularGames[i].id}>
          <a href={`/game/${store.popularGames[i].id}`}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames[i].image_id}.jpg`} className="card-img-top" alt={store.popularGames[i].name} />
          </a>
        </div>
      );
    }
  }
  
  return (
    <div className="banner text-center mb-4">
      <Carousel />
      <div className="row gameList row my-4 mx-5">
      <h3 className="text-center mb-3">Popular Games</h3>
        <div className="col-auto d-flex mx-auto px-4 gap-4 mx-5">
          {popularGameElements}
        </div>
      </div>
      {store.reviews && store.reviews[0] && <h3 className="text-center my-3">Reviews By Users</h3>}
      {store.reviews && store.reviews.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      }, [])}
    </div>
  );
};