import React from "react";
import logo from "./img/banner-img-01.svg";
import "./css/About.css";
import NavBar from "./NavBar";


export default function Contact(props) {
    return (
        <>
            <NavBar />
            <div className="container about_mt mb-5">
                <div
                    className="card-header bg-secondary"
                    style={{
                        color: "white",
                    }}
                >
                    Featured
                </div>
                <div
                    className={`card about_card text-${props.mode === "light" ? "dark" : "white"} bg-${props.mode === "light" ? "light" : "dark"
                        }`}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={logo} className="img-fluid rounded-start" alt="/" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>

                                <p className="card-text">
                                    You cantact me via email or by whatsapp
                                </p>
                                <p className="card-text">
                                    Email : kishansingh3d21f@gmail.com
                                </p>
                                <p className="card-text">
                                    Phone no. :+91-9264925554
                                </p>

                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card-footer bg-secondary"
                    style={{
                        color: "white",
                    }}
                >
                    @kishansingh
                </div>
            </div>
        </>

    );
}
