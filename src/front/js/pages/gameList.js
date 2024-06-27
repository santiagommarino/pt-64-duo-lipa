import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gameImage from "../../img/assasinsCreed.png";
import shootinGame from "../../img/cod.png";
import blocksImage from "../../img/minecraft.png";


export const GameList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row justify-content-center mt-5 d-flex ">
			<div className="searchBar ">
				<div className="container mt-5">
					<nav className="navbar navbar-expand-lg navbar-light bg-primary">
						<div className="navbar-nav">
							<div className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="yearDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									YEAR
								</a>
								<div className="dropdown-menu" aria-labelledby="yearDropdown">
									{/* <!-- Add your dropdown items here --> */}
								</div>
							</div>
							<div className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="ratingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									RATING
								</a>
								<div className="dropdown-menu" aria-labelledby="ratingDropdown">
									{/* <!-- Add your dropdown items here --> */}
								</div>
							</div>
							<div className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="genreDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									GENRE
								</a>
								<div className="dropdown-menu" aria-labelledby="genreDropdown">
									{/* <!-- Add your dropdown items here --> */}
								</div>
							</div>
							<div className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="popularDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									POPULAR
								</a>
								<div className="dropdown-menu" aria-labelledby="popularDropdown">
									{/* <!-- Add your dropdown items here --> */}
								</div>
							</div>
							<div className="search-bar ms-4">
								<form className="d-flex" role="search">
									<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
									<button className="btn btn-secondary" type="submit">Search</button>
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div id="carouselExampleIndicators" className="carousel slide img-fluid" data-bs-ride="true">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active img-fluid">
						<img src={gameImage} className="d-block mx-auto " alt="..." style={{ width: '300px', height: 'auto' }} />
					</div>
					<div className="carousel-item img-fluid">
						<img src={shootinGame} className="d-block mx-auto" alt="..." style={{ width: '300px', height: 'auto' }} />
					</div>
					<div className="carousel-item img-fluid">
						<img src={blocksImage} className="d-block mx-auto" alt="..." style={{ width: '300px', height: 'auto' }} />
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

			<div className="row gameList row- gx-4 ">
				<div className="col-auto d-flex mx-auto p-4 gap-4 ">
					<div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
				</div>
			</div>
			<div className="row gameList row- gx-4">
				<div className="col-auto d-flex mx-auto p-4 gap-4 ">
					<div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2 " style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card mx-auto p-2" style={{ marginRight: "18rem" }}>
						<img src={rigoImageUrl} className="card-img-top" alt="..." />
					</div>
				</div>
			</div>
		</div>
	);
};
