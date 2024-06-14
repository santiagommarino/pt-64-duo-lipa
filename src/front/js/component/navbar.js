import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
				<nav className="navbar navbar-expand-lg bg-warning">
		<div className="container-fluid ">
			<a className="navbar-brand" href="#">LOGO</a> {/*link to home page*/}
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Sign In</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="#">Create account</a>
				</li>
				<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Games
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#"></a></li>
					<li><a className="dropdown-item" href="#">Recent games</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Popular games</a></li>
				</ul>
				</li>
				<li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true">Disabled</a> {/*maybe members */}
				</li>
			</ul>
			<form className="d-flex" role="search">
				<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> {/*add search icon*/}
				<button className="btn btn-outline-secondary" type="submit">Search</button>
			</form>
			</div>
		</div>
		</nav>
	);
};
