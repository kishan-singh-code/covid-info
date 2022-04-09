import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import ButtonCard from "./ButtonCard";
import Graph from './Graph';
import Leader from './Leader';
// import SelectCon from './SelectCon';
import Map from "./Map";
import "./css/WorldArea.css";
import { prettyPrintStat } from "./utils";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer";
import NavBar from "./NavBar";


const WorldArea = (props) => {
    const [dataworld, setDataWorld] = useState({})
    const [casesType, setCasesType] = useState("cases");

    let countryName = "world";
    const updateData = async () => {
        // let url = "https://kishan-singh-code.github.io/jasonapi/covid/world_data.json";
        let url = "https://disease.sh/v3/covid-19/all?yesterday=true";
        let data = await fetch(url);
        let parsedData = await data.json();

        // let urla = "https://kishan-singh-code.github.io/jasonapi/covid/world_120_vacc.json";
        let urla = "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=false";
        let dataaa = await fetch(urla);
        let parsedDataa = await dataaa.json();
        let fruitObject = parsedDataa;
        let num = fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]];
        parsedData.active = num;
        let i = 0;
        for (i = 0; i < 30; i++) {
            if (num - fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - i]] > 0) {
                parsedData.critical = num - fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - i]];
                break;
            }
        }
        if (i > 27) {
            parsedData.critical = 0;
        }
        setDataWorld(parsedData);
    }


    useEffect(() => {
        updateData();
    }, [])

    // console.log(dataworld);
    return (
        <>
            <NavBar />
            <div className="container-fluid" style={{ marginTop: "3.2rem" }}>
                <div className="row g-3">
                    <div className="col-12  col-lg-8">
                        <div className="row g-3">
                            <Map center={[29.051368, -0.109937]} zoom={props.winsiz < 550 ? 1 : 1.5} countries={props.countries} casesType={casesType} checkmap={1} winsiz={props.winsiz} />
                        </div>
                        <div className="row gap_x">
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Cases"} data2={prettyPrintStat(dataworld.todayCases)} data3={prettyPrintStat(dataworld.cases)} data4={"cases"} onClick={(e) => setCasesType("cases")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Recovered"} data2={prettyPrintStat(dataworld.todayRecovered)} data3={prettyPrintStat(dataworld.recovered)} data4={"recovered"} onClick={(e) => setCasesType("recovered")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Vaccine"} data2={prettyPrintStat(dataworld.critical)} data3={prettyPrintStat(dataworld.active)} data4={"Vaccine"} onClick={(e) => setCasesType("active")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Deaths"} data2={prettyPrintStat(dataworld.todayDeaths)} data3={prettyPrintStat(dataworld.deaths)} data4={"deaths"} onClick={(e) => setCasesType("deaths")} /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <Graph casesType={casesType} countryName={countryName} statename="India" />
                        </div>
                        <div className="row">
                            <Leader countries={props.countries} casesType={casesType} check={1} />
                            {/* <SelectCon /> */}
                        </div>

                    </div>
                </div>

            </div>
            {props.winsiz < 992 && <Footer mode={'dark'} />}

        </>
    )
}

export default WorldArea
