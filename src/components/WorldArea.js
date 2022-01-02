import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import ButtonCard from "./ButtonCard";
import Graph from './Graph';
import Leader from './Leader';
import Map from "./Map";
import "./css/WorldArea.css";

const WorldArea = (props) => {
    const [dataworld, setDataWorld] = useState({})
    const [casesType, setCasesType] = useState("cases");

    const updateData = async () => {
        let url = "https://kishan-singh-code.github.io/jasonapi/covid/world_data.json";
        let data = await fetch(url);
        let parsedData = await data.json();
        setDataWorld(parsedData);
    }

    // console.log(props.countries);

    useEffect(() => {
        updateData();
    }, [])






    return (
        <div className="container-fluid" style={{ marginTop: "4rem" }}>
            <div className="row">
                <div className="col-12  col-lg-8">
                    <div className="row">
                        <Map />
                    </div>
                    <div className="row mt-4">
                        <div className="col-4"><ButtonCard data1={"Active Cases"} data2={dataworld.todayCases} data3={dataworld.cases} /></div>
                        <div className="col-4"><ButtonCard data1={"Recovered"} data2={dataworld.todayRecovered} data3={dataworld.recovered} /></div>
                        <div className="col-4"><ButtonCard data1={"Deaths"} data2={dataworld.todayDeaths} data3={dataworld.deaths} /></div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="row ">


                        <Graph casesType={casesType} />

                    </div>
                    <div className="row ">
                        <Leader countries={props.countries} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WorldArea
