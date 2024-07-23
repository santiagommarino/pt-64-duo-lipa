import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import theWitcher from "../../img/thewitcher.jpeg"
import eldenring from "../../img/eldenring.jpg"
import banner from "../../img/stray_banner.jpg"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { ReviewCard } from "../component/reviewCard.js";

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
      <div id="carouselExampleIndicators" className="carousel slide img-fluid" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active img-fluid">
            <img src={banner} className="d-block mx-auto " alt="..." style={{ width: '70vw', height: 'auto' }} />
          </div>
          <div className="carousel-item img-fluid">
            <img src={theWitcher} className="d-block mx-auto" alt="..." style={{ width: '70vw', height: 'auto' }} />
          </div>
          <div className="carousel-item img-fluid">
            <img src={ eldenring } className="d-block mx-auto" alt="..." style={{ width: '70vw', height: 'auto' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <br></br>
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