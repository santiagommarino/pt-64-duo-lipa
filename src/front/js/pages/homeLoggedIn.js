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

  for (let i = 0; i < 4; i++) {
    if (store.popularGames && store.popularGames[i]) {
      popularGameElements.push(
        <div className="card mx-auto p-2" style={{ marginRight: "18rem" }} key={store.popularGames[i].id}>
          <a href={`/game/${store.popularGames[i].id}`}>
            <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${store.popularGames[i].image_id}.jpg`} className="card-img-top" alt={store.popularGames[i].name} />
          </a>
        </div>
      );
    }
  }


  return (
    <div className="banner text-center mb-4 mt-5">
      <Carousel />
      <div className="row gameList row- gx-4">
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          {popularGameElements}
        </div>
      </div>
      <br></br>
      <div className="row gameList row- gx-4">
        {/*new releases*/}
      </div>
      {store.reviews && store.reviews.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      }, [])}
    </div>
  );
};