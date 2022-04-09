import React from "react";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import "./css/Map.css";
import { showDataOnMap, showDataOnMapState } from "./utils";


const casesTypeColors = {
    cases: {
        hex: "#ae80f9"
    },
    recovered: {
        hex: "#67f767"
    },
    deaths: {
        hex: "#ffa4a4"
    },
    active: {
        hex: "#83d0fdc9"
    },
};



function Map(props) {
    // console.log(props.casesType);

    return (
        <div>
            <div className="card text-dark rad" style={{ backgroundColor: casesTypeColors[props.casesType].hex }}>
                <div className="card-body padd">
                    <div className="map" style={{ height: props.winsiz < 768 ? (250 + (props.winsiz - 320) / 2.8).toString() + "px" : "410px" }}>
                        <MapContainer center={props.center} zoom={props.zoom} key={props.lat}>
                            {(props.checkmap === 2) && <GeoJSON data={props.geo.features} style={{ color: "orange", fillColor: "orange", fillOpacity: 0.4, weight: 1 }} />}
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {props.checkmap === 1 ? showDataOnMap(props.countries, props.casesType) : showDataOnMapState(props.unsortedstate, props.casesType)}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;