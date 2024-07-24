import React from 'react';
import '../../styles/loginModal.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import banner from "../../img/stray_banner.jpg"
import theWitcher from "../../img/thewitcher.jpeg"
import eldenring from "../../img/eldenring.jpg"



export function Carousel() {
    




    return (
        <div id="carouselExampleIndicators" className="carousel slide img-fluid" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active img-fluid">
            <img src={banner} className="d-block mx-auto carousel-img" alt="..." style={{ width: 'auto', height: '90vh' }} />
          </div>
          <div className="carousel-item img-fluid">
            <img src={theWitcher} className="d-block mx-auto carousel-img" alt="..." style={{ width: 'auto', height: '90vh' }} />
          </div>
          <div className="carousel-item img-fluid">
            <img src={ eldenring } className="d-block mx-auto carousel-img" alt="..." style={{ width: 'auto', height: '90vh' }} />
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
    )
}