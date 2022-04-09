import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import ButtonCard from "./ButtonCard";
import Graph from './Graph';
import SelectCon from './SelectCon';
import Map from "./Map";
import "./css/WorldArea.css";
import { prettyPrintStat } from "./utils";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer";
import NavBar from "./NavBar";




const AllCon = (props) => {
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState([29.051368, -0.109937]);
    const [lat, setLat] = useState(29.051368);
    const [mapZoom, setMapZoom] = useState(props.winsiz < 550 ? 1 : 1.5);
    const [countryName, setCountryName] = useState("world");
    const [countryInfo, setCountryInfo] = useState({});


    const onCountryChange = async (e) => {

        let countryCode = e.target.value;

        if (countryCode === "world") {
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
            // setCountryInfo(parsedData);


            let obj = parsedData;
            setCountryName(countryCode);
            setCountryInfo(obj);
            setMapCenter([29.051368, -0.109937]);
            setMapZoom(props.winsiz < 550 ? 1 : 1.5);
            setLat(1.5);
            // console.log(countryName);
        }

        else {
            let obj = props.unsorted.find(o => o.countryInfo.iso2 === countryCode);
            setCountryName(obj.country);
            setCountryInfo(obj);
            setMapCenter([obj.countryInfo.lat, obj.countryInfo.long]);
            setMapZoom(4);
            setLat(obj.countryInfo.lat);
        }
    };


    const updateData = async () => {
        // let url = "https://kishan-singh-code.github.io/jasonapi/covid/world_data.json";
        let url = "https://disease.sh/v3/covid-19/all?yesterday=true";
        let data = await fetch(url);
        let parsedData = await data.json();
        // setCountryInfo(parsedData);
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
        setCountryInfo(parsedData);
    }


    useEffect(() => {
        updateData();
    }, [])


    // console.log(countryName);

    return (
        <>
            <NavBar />
            <div className="container-fluid" style={{ marginTop: "3.2rem" }}>
                <div className="row g-3">
                    <div className="col-12  col-lg-8">
                        <div className="row g-3">
                            <Map center={mapCenter} zoom={mapZoom} countries={props.unsorted} casesType={casesType} lat={lat} checkmap={1} winsiz={props.winsiz} />
                        </div>
                        <div className="row gap_x">
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Cases"} data2={prettyPrintStat(countryInfo.todayCases)} data3={prettyPrintStat(countryInfo.cases)} data4={"cases"} onClick={(e) => setCasesType("cases")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Recovered"} data2={prettyPrintStat(countryInfo.todayRecovered)} data3={prettyPrintStat(countryInfo.recovered)} data4={"recovered"} onClick={(e) => setCasesType("recovered")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Vaccine"} data2={prettyPrintStat(countryInfo.critical)} data3={prettyPrintStat(countryInfo.active)} data4={"Vaccine"} onClick={(e) => setCasesType("active")} /></div>
                            <div className="col-6 col-md-3 g-3"><ButtonCard winsiz={props.winsiz} data1={"Deaths"} data2={prettyPrintStat(countryInfo.todayDeaths)} data3={prettyPrintStat(countryInfo.deaths)} data4={"deaths"} onClick={(e) => setCasesType("deaths")} /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <SelectCon options={props.options} onCountryChange={onCountryChange} countryIn={countryInfo} casesType={casesType} />
                        </div>
                        <div className="row">
                            {/* <Leader countries={props.countries} casesType={casesType} /> */}
                            <Graph casesType={casesType} countryName={countryName} vacc={props.vacc} statename="India" />
                        </div>

                    </div>
                </div>

            </div>
            {props.winsiz < 992 && <Footer mode={'dark'} />}

        </>
    )
}

export default AllCon
