import React, { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard";
import Graph from './Graph';
import SelectCon from './SelectCon';
import Leader from './Leader';
import Map from "./Map";
import SelectState from "./SelectState";
import "./css/WorldArea.css";
import "./css/India.css";
import { prettyPrintStat, stateAll } from "./utils";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer";
import NavBar from "./NavBar";






const India = (props) => {
    const [casesType, setCasesType] = useState("cases");

    const [mapCenter, setMapCenter] = useState([23, 80]);

    const [lat, setLat] = useState(23);
    const [mapZoom, setMapZoom] = useState(props.winsiz < 550 ? 3 : 4);
    const [countryInfo, setCountryInfo] = useState({});
    const [geo, setGeo] = useState({});
    const [stateinfo, setStateInfo] = useState({});
    const [statename, setStateName] = useState('India');



    const onStateChange = async (e) => {

        const stateCode = e.target.value;
        setStateName(stateCode);
        let url = `https://kishan-singh-code.github.io/jasonapi/covid/geojson/${stateCode}.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setGeo(parsedData);

        if (stateCode === "India") {

            setCountryInfo(props.indiaInfo);
            setMapCenter([23, 80]);
            setMapZoom(props.winsiz < 550 ? 3 : 4);
            setLat(1.5);
        }

        else {
            let obj = props.unsortedstate.find(o => o.state === stateCode);
            // setCountryName(obj.country);
            setCountryInfo(obj);
            let allinfo = stateAll(stateCode);
            setStateInfo(allinfo);
            setMapCenter([allinfo.lat, allinfo.long]);
            setMapZoom(6);
            setLat(allinfo.lat);
        }
    };

    useEffect(() => {
        setCountryInfo(props.indiaInfo);
        setGeo(props.geoindia);
        // console.log(props.unsortedstate);
    }, [])


    return (
        <>
            <NavBar />
            <div className="container-fluid" style={{ marginTop: "3.2rem" }}>
                <div className="row g-3">
                    <div className="col-12  col-lg-8">
                        <div className="row g-3">
                            <div className="col-12  col-lg-7">
                                <Map center={mapCenter} zoom={mapZoom} unsortedstate={props.unsortedstate} casesType={casesType} lat={lat} geo={geo} checkmap={2} winsiz={props.winsiz} />
                            </div>
                            <div className="col-12  col-lg-5">
                                <SelectState stateoptions={props.stateoptions} unsortedstate={props.unsortedstate} onStateChange={onStateChange} stateinfo={stateinfo} statename={statename} casesType={casesType} />
                            </div>
                        </div>
                        <div className="row gap_x">
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Active Cases"} data2={prettyPrintStat(countryInfo.todayCases)} data3={prettyPrintStat(countryInfo.cases)} data4={"cases"} onClick={(e) => setCasesType("cases")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Recovered"} data2={prettyPrintStat(countryInfo.todayRecovered)} data3={prettyPrintStat(countryInfo.recovered)} data4={"recovered"} onClick={(e) => setCasesType("recovered")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Vaccine"} data2={prettyPrintStat(countryInfo.critical)} data3={prettyPrintStat(countryInfo.active)} data4={"Vaccine"} onClick={(e) => setCasesType("active")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Deaths"} data2={prettyPrintStat(countryInfo.todayDeaths)} data3={prettyPrintStat(countryInfo.deaths)} data4={"deaths"} onClick={(e) => setCasesType("deaths")} /></div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="row">

                            <Leader states={props.states} casesType={casesType} check={2} />

                        </div>
                        <div className="row">
                            {/* <Leader countries={props.countries} casesType={casesType} /> */}
                            <Graph casesType={casesType} countryName={"India"} check={2} statename={statename} unsortedstate={props.unsortedstate} />
                        </div>

                    </div>
                </div>

            </div>
            {props.winsiz < 992 && <Footer mode={'dark'} />}

        </>
    )
}

export default India
