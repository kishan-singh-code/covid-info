import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import img_3 from "./img/covid_1.svg"


export const NavBar = (props) => {



    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light opacity-75" style={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={img_3} alt="" width="50" height="35" class="d-inline-block" />
                        <span style={{ fontWeight: "800", fontSize: "1.3rem" }}>Covid-Info</span>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="toggler-icon top-bar"></span>
                        <span class="toggler-icon middle-bar"></span>
                        <span class="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>

                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;