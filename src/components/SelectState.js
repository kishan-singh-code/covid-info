import React from 'react'
import "./css/SelectCon.css";
import { prettyPrintStat } from "./utils";
import olol from "./img/5.png"


const casesTypeColors = {
    cases: {
        hex: "#ae83fdc9",
    },
    recovered: {
        hex: "#67f767",
    },
    deaths: {
        hex: "#ffa4a4",
    },
    active: {
        hex: "#83d0fdc9",
    },
};



const SelectState = (props) => {
    return (
        <div>
            <div class="card text-center" style={{ height: "410px", borderRadius: "8px", border: "0px", backgroundColor: casesTypeColors[props.casesType].hex, }}>
                <div class="card-body" style={{ placeSelf: "center" }}>
                    <snap class="text-light fw-bolder">Select The State</snap>

                    <select class="form-select form-select-sm text-center mt-2" aria-label="Default select example" onChange={props.onStateChange}>
                        {props.stateoptions.map((option) => (
                            <option key={option.name} value={option.name}>{option.name}</option>
                        ))}
                    </select>




                    {/* <div class="card mt-4">
                        <div class="row g-0">
                            <div class="col-6">
                                {props.stateinfo ? <img src={props.stateinfo.flag} class="img-fluid img_fit rounded-start" alt="..." /> : <img class="img-fluid img_fit rounded-start" src={olol} alt="..." />}
                            </div>
                            <div class="col-6" style={{ placeSelf: "center" }}>
                                <div class="card-body body_padd">
                                    {props.stateinfo ? <p class="card-text mkm">Capital: {props.stateinfo.capital}</p> : <p class="card-text mkm">World Wide</p>}
                                    {props.stateinfo ? <p class="card-text mkm">Population: {prettyPrintStat(props.stateinfo.population)}</p> : <p class="card-text mkm">Population: +1.4b</p>}
                                    {props.stateinfo ? <p class="card-text mkm">Language: {props.stateinfo.language}</p> : ""}
                                </div>
                            </div>
                        </div>
                    </div> */}





                    <div class="card mt-4" style={{ borderRadius: "8px", border: "0px" }}>
                        {props.statename !== 'India' ? <img src={props.stateinfo.flag} class="img-fluid img_fit_state rounded-start" alt="Loading..." /> : <img class="img-fluid img_fit_state rounded-start" src={olol} alt="Loading..." />}
                        <div class="card-body">

                            {props.statename !== 'India' ? <p class="card-text mkmn">Capital: {props.stateinfo.capital}</p> : <p class="card-text mkmn">Country: India</p>}
                            {props.statename !== 'India' ? <p class="card-text mkmn">Population: {prettyPrintStat(props.stateinfo.population)}</p> : <p class="card-text mkmn">Population: +1.38b</p>}
                            {props.statename !== 'India' ? <p class="card-text mkmn">Language: {props.stateinfo.language}</p> : ""}


                        </div>
                    </div>














                </div>
            </div>
        </div>
    )
}

export default SelectState
