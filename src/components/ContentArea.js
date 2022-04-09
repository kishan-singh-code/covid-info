import React from "react";
import "./css/ContentArea.css";
import { Link } from "react-router-dom";
import img_1 from "./img/3.png"
import img_2 from "./img/22.png"
import img_3 from "./img/44.png"
import img_4 from "./img/game_img.png"
// import Map from "./Map";
// import LiveContent from "./LiveContent";

export const ContentArea = (props) => {
    // console.log(props.winsiz);
    return (
        <>
            <div className="container-fluid" style={{ paddingLeft: (props.winsiz < 768 ? (props.winsiz < 418 ? "1rem" : "2rem") : "3rem"), paddingRight: (props.winsiz < 768 ? (props.winsiz < 418 ? "1rem" : "2rem") : "3rem") }}>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4" style={{ marginTop: (props.winsiz < 768 ? "2.5rem" : "7rem"), textAlign: "-webkit-center" }}>
                    <div className="col my-3" style={{ textAlign: "-webkit-center" }}>
                        <Link to="/worldarea" className="fard wallet" style={{ width: (props.winsiz < 768 ? (props.winsiz < 555 ? ((260 - (768 - props.winsiz) / 4).toString() + "px") : ((270 - (768 - props.winsiz) / 6).toString() + "px")) : ((260 - (1377 - props.winsiz) / 6).toString() + "px")), height: (props.winsiz < 768 ? (props.winsiz < 555 ? ((370 - (768 - props.winsiz) / 3).toString() + "px") : ((370 - (768 - props.winsiz) / 7).toString() + "px")) : ((370 - (1377 - props.winsiz) / 7).toString() + "px")) }}>
                            <div className="overlay" style={{ top: (props.winsiz < 768 ? (props.winsiz < 555 ? ((70 - (555 - props.winsiz) / 8).toString() + "px") : ((90 - (768 - props.winsiz) / 13).toString() + "px")) : ((90 - (1377 - props.winsiz) / 13).toString() + "px")), left: (props.winsiz < 768 ? (props.winsiz < 555 ? ((60 - (555 - props.winsiz) / 9).toString() + "px") : ((70 - (768 - props.winsiz) / 13).toString() + "px")) : ((70 - (1377 - props.winsiz) / 13).toString() + "px")) }}></div>
                            <div className="circle">
                                <img src={img_1} alt="Italian Trulli" height={props.winsiz < 555 ? 85 : 115} width={props.winsiz < 555 ? 85 : 115} />

                            </div>
                            <p>World Status</p>
                        </Link>
                    </div>
                    <div className="col my-3" style={{ textAlign: "-webkit-center" }}>
                        <Link to="/india" className="fard credentialing" style={{ width: (props.winsiz < 768 ? (props.winsiz < 555 ? ((260 - (768 - props.winsiz) / 4).toString() + "px") : ((270 - (768 - props.winsiz) / 6).toString() + "px")) : ((260 - (1377 - props.winsiz) / 6).toString() + "px")), height: (props.winsiz < 768 ? (props.winsiz < 555 ? ((370 - (768 - props.winsiz) / 3).toString() + "px") : ((370 - (768 - props.winsiz) / 7).toString() + "px")) : ((370 - (1377 - props.winsiz) / 7).toString() + "px")) }}>
                            <div className="overlay" style={{ top: (props.winsiz < 768 ? (props.winsiz < 555 ? ((70 - (555 - props.winsiz) / 8).toString() + "px") : ((90 - (768 - props.winsiz) / 13).toString() + "px")) : ((90 - (1377 - props.winsiz) / 13).toString() + "px")), left: (props.winsiz < 768 ? (props.winsiz < 555 ? ((60 - (555 - props.winsiz) / 9).toString() + "px") : ((70 - (768 - props.winsiz) / 13).toString() + "px")) : ((70 - (1377 - props.winsiz) / 13).toString() + "px")) }}></div>
                            <div className="circle">
                                <img src={img_2} alt="Italian Trulli" height={props.winsiz < 555 ? 85 : 115} width={props.winsiz < 555 ? 85 : 115} />


                            </div>
                            <p>India status</p>
                        </Link>
                    </div>
                    <div className="col my-3" style={{ textAlign: "-webkit-center" }}>
                        <Link to="/allcon" className="fard education" style={{ width: (props.winsiz < 768 ? (props.winsiz < 555 ? ((260 - (768 - props.winsiz) / 4).toString() + "px") : ((270 - (768 - props.winsiz) / 6).toString() + "px")) : ((260 - (1377 - props.winsiz) / 6).toString() + "px")), height: (props.winsiz < 768 ? (props.winsiz < 555 ? ((370 - (768 - props.winsiz) / 3).toString() + "px") : ((370 - (768 - props.winsiz) / 7).toString() + "px")) : ((370 - (1377 - props.winsiz) / 7).toString() + "px")) }}>
                            <div className="overlay" style={{ top: (props.winsiz < 768 ? (props.winsiz < 555 ? ((70 - (555 - props.winsiz) / 8).toString() + "px") : ((90 - (768 - props.winsiz) / 13).toString() + "px")) : ((90 - (1377 - props.winsiz) / 13).toString() + "px")), left: (props.winsiz < 768 ? (props.winsiz < 555 ? ((60 - (555 - props.winsiz) / 9).toString() + "px") : ((70 - (768 - props.winsiz) / 13).toString() + "px")) : ((70 - (1377 - props.winsiz) / 13).toString() + "px")) }}></div>
                            <div className="circle">
                                <img src={img_3} alt="Italian Trulli" height={props.winsiz < 555 ? 85 : 115} width={props.winsiz < 555 ? 85 : 115} />

                            </div>
                            <p>Specific Country</p>
                        </Link>
                    </div>
                    <div className="col my-3" style={{ textAlign: "-webkit-center" }}>
                        <Link to="/game" className="fard human-resources" style={{ width: (props.winsiz < 768 ? (props.winsiz < 555 ? ((260 - (768 - props.winsiz) / 4).toString() + "px") : ((270 - (768 - props.winsiz) / 6).toString() + "px")) : ((260 - (1377 - props.winsiz) / 6).toString() + "px")), height: (props.winsiz < 768 ? (props.winsiz < 555 ? ((370 - (768 - props.winsiz) / 3).toString() + "px") : ((370 - (768 - props.winsiz) / 7).toString() + "px")) : ((370 - (1377 - props.winsiz) / 7).toString() + "px")) }}>
                            <div className="overlay" style={{ top: (props.winsiz < 768 ? (props.winsiz < 555 ? ((70 - (555 - props.winsiz) / 8).toString() + "px") : ((90 - (768 - props.winsiz) / 13).toString() + "px")) : ((90 - (1377 - props.winsiz) / 13).toString() + "px")), left: (props.winsiz < 768 ? (props.winsiz < 555 ? ((60 - (555 - props.winsiz) / 9).toString() + "px") : ((70 - (768 - props.winsiz) / 13).toString() + "px")) : ((70 - (1377 - props.winsiz) / 13).toString() + "px")) }}></div>
                            <div className="circle">
                                <img src={img_4} alt="Italian Trulli" height={props.winsiz < 555 ? 85 : 115} width={props.winsiz < 555 ? 85 : 115} />

                            </div>
                            <p>Memory Game</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentArea;