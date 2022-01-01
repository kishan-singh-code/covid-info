import React from 'react'
import "./css/ButtonCard.css";

const ButtonCard = (props) => {
    return (
        <div>
            <a href="/" className="fardb walletb">

                <div className="container-fluid">
                    <div className="row br" style={{ height: "150px" }}>
                        <div className="col-5 bc" style={{ height: "150px" }}>
                            <div className="overlayb"></div>
                            <div className="circleb">

                            </div>
                        </div>


                        <div className="col-7 bc" style={{ height: "100px", alignSelf: "center" }}>
                            <div className="row br" style={{ height: "33px" }}>
                                <p>{props.data1}</p>
                            </div>
                            <div className="row br" style={{ height: "33px" }}>
                                <p>{props.data2}</p>
                            </div>
                            <div className="row br" style={{ height: "33px" }}>
                                <p>{props.data3}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </a>

        </div>
    )
}

export default ButtonCard
