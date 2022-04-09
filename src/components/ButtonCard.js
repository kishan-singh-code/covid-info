
import React from 'react'
import "./css/ButtonCard.css";
// import img_3 from "./img/dead.svg"
// import img_3 from "./img/recovered.svg"
import recovered from "./img/recovered.svg"
import deaths from "./img/deaths.svg"
import cases from "./img/cases.svg"
import Vaccine from "./img/vacc2.svg"

const ButtonCard = (props) => {

    return (
        <div>
            {/* <a style={{ textDecoration: "none" }} onClick={props.onClick}> */}
            <div class={`card  fardb ${props.data4}`} onClick={props.onClick} >
                <div class="card-body">


                    {props.winsiz > 1340 && <div className="row ">
                        <div className={`col-4 set_pad_5`} style={{ textAlign: "-webkit-center" }}>
                            <div className="overlayb"></div>
                            <div className="circleb">

                                <img src={props.data4 === "deaths" ? deaths : props.data4 === "cases" ? cases : props.data4 === "Vaccine" ? Vaccine : recovered} alt="Italian Trulli" height={props.data4 === "Vaccine" ? 40 : 45} width={props.data4 === "Vaccine" ? 40 : 45} style={{ marginLeft: props.data4 === "Vaccine" ? "14px" : "11px", marginTop: props.data4 === "Vaccine" ? "11px" : "9px" }} />

                            </div>
                        </div>
                        <div className="col-8 set_pad_7 text-center">
                            <div className="row" >
                                <p className='op5501 op'>{props.data1}</p>
                            </div>
                            <div className="row">
                                <p className={`op5502${props.data4} op`}>{props.data2}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Today</span></p>
                            </div>
                            <div className="row">
                                <p className='op5503 op'>{props.data3}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Total</span></p>
                            </div>
                        </div>
                    </div>}


                    {props.winsiz <= 1340 && props.winsiz > 991 && <div className='text-center'>
                        <div className="overlayb" style={{ left: (53 + (props.winsiz - 992) / 11.6).toString() + "px" }}></div>
                        <div className="circleb text-center" style={{ left: (34 + (props.winsiz - 992) / 11.6).toString() + "px" }}>
                            <img src={props.data4 === "deaths" ? deaths : props.data4 === "cases" ? cases : props.data4 === "Vaccine" ? Vaccine : recovered} alt="Italian Trulli" height={props.data4 === "Vaccine" ? 30 : 35} width={props.data4 === "Vaccine" ? 30 : 35} style={{ marginLeft: props.data4 === "Vaccine" ? "10px" : "7px", marginTop: props.data4 === "Vaccine" ? "8px" : "6px" }} />

                        </div>
                        <div className="row" style={{ marginTop: "-0.1rem" }}>
                            <p className='op5501 op'>{props.data1}</p>
                            <p className={`op5502${props.data4} op`}>{props.data2}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Today</span></p>
                            <p className='op5503 op'>{props.data3}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Total</span></p>
                        </div>
                    </div>
                    }



                    {props.winsiz <= 991 && props.winsiz > 767 && <div className='text-center'>
                        <div className="overlayb" style={{ left: (64 + (props.winsiz - 768) / 8).toString() + "px" }}></div>
                        <div className="circleb text-center" style={{ left: (45 + (props.winsiz - 768) / 8).toString() + "px" }}>
                            <img src={props.data4 === "deaths" ? deaths : props.data4 === "cases" ? cases : props.data4 === "Vaccine" ? Vaccine : recovered} alt="Italian Trulli" height={props.data4 === "Vaccine" ? 30 : 35} width={props.data4 === "Vaccine" ? 30 : 35} style={{ marginLeft: props.data4 === "Vaccine" ? "10px" : "7px", marginTop: props.data4 === "Vaccine" ? "8px" : "6px" }} />

                        </div>
                        <div className="row" style={{ marginTop: "-0.1rem" }}>
                            <p className='op5501 op'>{props.data1}</p>
                            <p className={`op5502${props.data4} op`}>{props.data2}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Today</span></p>
                            <p className='op5503 op'>{props.data3}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Total</span></p>
                        </div>
                    </div>
                    }









                    {props.winsiz < 768 && props.winsiz > 480 && <div className="row ">
                        <div className={`col-4 set_pad_5`}>
                            <div className="overlayb"></div>
                            <div className="circleb">

                                <img src={props.data4 === "deaths" ? deaths : props.data4 === "cases" ? cases : props.data4 === "Vaccine" ? Vaccine : recovered} alt="Italian Trulli" height={props.data4 === "Vaccine" ? 40 : 45} width={props.data4 === "Vaccine" ? 40 : 45} style={{ marginLeft: props.data4 === "Vaccine" ? "14px" : "11px", marginTop: props.data4 === "Vaccine" ? "11px" : "9px" }} />

                            </div>
                        </div>
                        <div className="col-8 set_pad_7 text-center">
                            <div className="row" >
                                <p className='op5501 op'>{props.data1}</p>
                            </div>
                            <div className="row">
                                <p className={`op5502${props.data4} op`}>{props.data2}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Today</span></p>
                            </div>
                            <div className="row">
                                <p className='op5503 op'>{props.data3}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Total</span></p>
                            </div>
                        </div>
                    </div>}








                    {props.winsiz <= 480 && <div className='text-center'>
                        <div className="overlayb" style={{ left: (47 + (props.winsiz - 320) / 4).toString() + "px" }}></div>
                        <div className="circleb text-center" style={{ left: (28 + (props.winsiz - 320) / 4).toString() + "px" }}>
                            <img src={props.data4 === "deaths" ? deaths : props.data4 === "cases" ? cases : props.data4 === "Vaccine" ? Vaccine : recovered} alt="Italian Trulli" height={props.data4 === "Vaccine" ? 30 : 35} width={props.data4 === "Vaccine" ? 30 : 35} style={{ marginLeft: props.data4 === "Vaccine" ? "10px" : "7px", marginTop: props.data4 === "Vaccine" ? "8px" : "6px" }} />

                        </div>
                        <div className="row" style={{ marginTop: "-0.1rem" }}>
                            <p className='op5501 op'>{props.data1}</p>
                            <p className={`op5502${props.data4} op`}>{props.data2}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Today</span></p>
                            <p className='op5503 op'>{props.data3}<span className="" style={{ fontSize: "0.7rem" }}>&nbsp;Total</span></p>
                        </div>
                    </div>
                    }






                    {/* 
{props.winsiz <= 1340 && <div className='text-center'>

<div className="overlayb" style={{ left: (68 - (550 - props.winsiz) / 6.25).toString() + "px" }}></div>
<div className="circleb text-center" style={{ left: (48 - (550 - props.winsiz) / 6.25).toString() + "px" }}>
    <img src={props.img_3} alt="Italian Trulli" height={50} width={50} />

</div>
<div className="row">
    <p className='op5501 op'>{props.data1}</p>
    <p className='op5502 op'>{props.data2}</p>
    <p className='op5503 op'>{props.data3}</p>
</div>
</div>
} */}








                </div>
            </div>
            {/* </a > */}

        </div >
    )
}

export default ButtonCard
