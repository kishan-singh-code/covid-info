import React from "react";
import logo from "./img/work.svg";
import "./css/About.css";
import NavBar from "./NavBar";


export default function About(props) {
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
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">
                                    Hi, i am Kishan Singh, In this project, which is use to check the status of covid-19 all around the globe,
                                    we can check the status of covid-19 world wide , for a specific country and for India and its states.
                                    I added A memory Card game so that it can improve other brain functions,
                                    such as attention, concentration, and focus. Memory games give space to critical thinking and that
                                    helps us to nurture our attention to detail. Memory games can improve visual recognition.
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
