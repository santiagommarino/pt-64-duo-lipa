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

  for (let i = 0; i < 8; i++) {
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
        {" "}
        {/*list of popular games. click to go to game page*/}
        <div className="col-auto d-flex mx-auto p-4 gap-4 ">
          {popularGameElements}
        </div>
      </div>
      <div className="features container text-center ">
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
      {store.reviews && store.reviews.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      }, [])}
    </div>
  );
};