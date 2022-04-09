import React from "react";
import "./css/SelectCon.css";
import olol from "./img/world.png"
import { prettyPrintStat } from "./utils";


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


const SelectCon = (props) => {

    // console.log(props.countryIn);
    return (
        <div >
            <div class="card mb-3 text-center" style={{ height: "292px", backgroundColor: casesTypeColors[props.casesType].hex, borderRadius: "8px", border: "0px" }}>
                <div class="card-body" style={{ placeSelf: "center" }}>
                    Select The Country

                    <select class="form-select form-select-sm text-center mt-2" aria-label="Default select example" onChange={props.onCountryChange}>
                        {props.options.map((option) => (
                            <option key={option.name} value={option.value}>{option.name}</option>
                        ))}
                    </select>



                    {/* <div class="card mt-4">
                        <div class="row g-0">
                            <div class="col-6">
                                {props.countryIn.countryInfo ? <img src={props.countryIn.countryInfo.flag} class="img-fluid img_fit rounded-start" alt="..." /> : <img class="img-fluid img_fit rounded-start" src={olol} alt="..." />}
                            </div>
                            <div class="col-6" style={{ placeSelf: "center" }}>
                                <div class="card-body body_padd">
                                    {props.countryIn.countryInfo ? <p class="card-text mkm">Country: {props.countryIn.country}</p> : <p class="card-text mkm">World Wide</p>}
                                    {props.countryIn.countryInfo ? <p class="card-text mkm">Population: {prettyPrintStat(props.countryIn.population)}</p> : <p class="card-text mkm">Population: {prettyPrintStat(props.countryIn.population)}</p>}
                                    {props.countryIn.countryInfo ? <p class="card-text mkm">Continent: {props.countryIn.continent}</p> : ""}
                                </div>
                            </div>
                        </div>
                    </div> */}




                    {props.countryIn.countryInfo ? <img src={props.countryIn.countryInfo.flag} class="img-fluid img_fit_con rounded-start mt-2" alt="..." /> : <img class="img-fluid img_fit_con rounded-start mt-2" src={olol} alt="..." />}


                    <div class="card mt-2" style={{ borderRadius: "8px", border: "0px" }}>
                        <div class="card-body" style={{ padding: "0rem" }}>
                            {props.countryIn.countryInfo ? <p class="card-text mkm">Country : {props.countryIn.country}</p> : <p class="card-text mkm">World Wide</p>}
                            {props.countryIn.countryInfo ? <p class="card-text mkm">Population : {prettyPrintStat(props.countryIn.population)}</p> : <p class="card-text mkm">Population: {prettyPrintStat(props.countryIn.population)}</p>}
                            {props.countryIn.countryInfo ? <p class="card-text mkm">Continent : {props.countryIn.continent}</p> : ""}


                        </div>
                    </div>

















                </div>
            </div>
        </div>
    )
}

export default SelectCon
