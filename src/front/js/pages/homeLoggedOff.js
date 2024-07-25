import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import banner from "../../img/stray_banner.jpg"
import { ReviewCard } from "../component/reviewCard.js";
import codImage from "../../img/cod3.jpeg"
import assasinsImage from "../../img/assasinsCreed.png"
import mineImage from "../../img/minecraft.png"
import strayImage from "../../img/stray.png"
import theWitcher from "../../img/thewitcher.jpeg"
import eldenring from "../../img/eldenring.jpg"
import { Link } from "react-router-dom";
import { Carousel } from "../component/carousel.js";

export const HomeLoggedOff = ({ logout }) => {
  const { store, actions } = useContext(Context);
  const popularGameElements = [];

  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)

  useEffect(() => {
    actions.handleFetchPopularGames()
  }, [])

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
      <h3 className="text-center mb-3">Features</h3>
      <div className="features container text-center">
        {/*list website features*/}
        <div className=" row row-cols-3">
          <div className="col-6 px-1 my-1" onMouseOver={() => setHover1(true)} onMouseOut={() => setHover1(false)}>
            <div className="col pt-2 d-flex justify-content-center align-items-center" style={{ background: hover1 == true ? "#54B4D3" : "#9FA6B2" }}>
              <i className="fa-solid fa-heart fa-2xl p-4 "></i> <p>Express your admiration for the games you love</p>
            </div>
          </div>
          <div className=" col-6 px-1 my-1" onMouseOver={() => setHover2(true)} onMouseOut={() => setHover2(false)}>
            <div className="featureTwo col pt-2 d-flex justify-content-center align-items-center" style={{ background: hover2 == true ? "#54B4D3" : "#9FA6B2" }}>
              <i className="fa-solid fa-align-left fa-2xl p-4 justify-content-center"></i> <p>Write and share reviews</p>
            </div>
          </div>
          <div className="col-6 px-1 my-1" onMouseOver={() => setHover3(true)} onMouseOut={() => setHover3(false)}>
            <div className="col pt-2 d-flex  justify-content-center align-items-center" style={{ background: hover3 == true ? "#54B4D3" : "#9FA6B2" }}>
              <i className=" fa-solid fa-star fa-2xl p-4 justify-content-center"></i> <p className="loveFeature d-flex justify-content-center">Rate each game using a five-star rating system</p>
            </div>
          </div>
          <div className="col-6 px-1 my-1" onMouseOver={() => setHover4(true)} onMouseOut={() => setHover4(false)}>
            <div className="col  pt-2 d-flex justify-content-center align-items-center" style={{ background: hover4 == true ? "#54B4D3" : "#9FA6B2" }}>
              <i className="fa-solid fa-user-plus fa-2xl p-4 justify-content-center"></i><p>Follow your friends and other members</p>
            </div>
          </div>
        </div>
      </div>
      {store.reviews && store.reviews[0] && <h3 className="text-center my-3">Reviews By Users</h3>}
      {store.reviews && store.reviews.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      }, [])}
    </div>
  );
};