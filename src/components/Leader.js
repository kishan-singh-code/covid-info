import React, { useState, useEffect } from "react";
import "./css/Leader.css";
import numeral from "numeral";
import { spacing } from "./utils";
import { sortData } from "./utils";



const casesTypeColors = {
    cases: {
        hex: "bg_lolp",
        nam: "Cases"
    },
    recovered: {
        hex: "bg_lolg",
        nam: "Recovered"
    },
    deaths: {
        hex: "bg_lolr",
        nam: "Deaths"
    },
    active: {
        hex: "bg_lolb",
        nam: "Vaccinated"
    },
};


const Leader = (props) => {

    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [active, setActive] = useState([]);





    useEffect(() => {
        if (props.check === 1) {
            let sortedData = sortData(props.countries, "deaths");
            setDeaths(sortedData);

            sortedData = sortData(props.countries, "recovered");
            setRecovered(sortedData);

            sortedData = sortData(props.countries, "active");
            setActive(sortedData);
        }
        else {
            let sortedData = sortData(props.states, "deaths");
            setDeaths(sortedData);

            sortedData = sortData(props.states, "recovered");
            setRecovered(sortedData);

            sortedData = sortData(props.states, "active");
            setActive(sortedData);
        }

    }, [])


    return (
        <div>
            <div className={`card text-center ${casesTypeColors[props.casesType].hex} ${props.check === 1 ? "my-3" : "mb-3"}`} style={{ borderRadius: "8px", border: "0px" }}>
                <div className="card-body">
                    {props.check === 1 ? <table className="table table-fixed text-light">
                        <thead>
                            <tr>
                                <th scope="col" className="col-2">#</th>
                                <th scope="col" className="col-6">Countries</th>
                                <th scope="col" className="col-4">{casesTypeColors[props.casesType].nam}</th>
                            </tr>
                        </thead>

                        {props.casesType === 'cases' && <tbody>
                            {props.countries.map((obj, index) => (
                                <tr key={index}>
                                    <td className='col-2'>{index + 1}</td>
                                    <td className='col-6'>{obj.country.split(' ')[0]}</td>
                                    <td className='col-4'><strong>{numeral(obj.cases).format("0,0")}</strong></td>
                                </tr>
                            ))}
                        </tbody>}
                        {props.casesType === 'deaths' && <tbody>
                            {deaths.map((obj, index) => (
                                <tr key={index}>
                                    <td className='col-2'>{index + 1}</td>
                                    <td className='col-6'>{obj.country.split(' ')[0]}</td>
                                    <td className='col-4'><strong>{numeral(obj.deaths).format("0,0")}</strong></td>
                                </tr>
                            ))}
                        </tbody>}
                        {props.casesType === 'recovered' && <tbody>
                            {recovered.map((obj, index) => (
                                <tr key={index}>
                                    <td className='col-2'>{index + 1}</td>
                                    <td className='col-6'>{obj.country.split(' ')[0]}</td>
                                    <td className='col-4'><strong>{numeral(obj.recovered).format("0,0")}</strong></td>
                                </tr>
                            ))}
                        </tbody>}
                        {props.casesType === 'active' && <tbody>
                            {active.map((obj, index) => (
                                <tr key={index}>
                                    <td className='col-2'>{index + 1}</td>
                                    <td className='col-6'>{obj.country.split(' ')[0]}</td>
                                    <td className='col-4'><strong>{numeral(obj.active).format("0,0")}</strong></td>
                                </tr>
                            ))}
                        </tbody>}

                    </table> :
                        <table className="table table-fixed text-light">
                            <thead>
                                <tr>
                                    <th scope="col" className="col-2">#</th>
                                    <th scope="col" className="col-6">States</th>
                                    <th scope="col" className="col-4">{casesTypeColors[props.casesType].nam}</th>
                                </tr>
                            </thead>

                            {props.casesType === 'cases' && <tbody>
                                {props.states.map(({ state, cases }, index) => (
                                    <tr key={index}>
                                        <td className='col-2'>{index + 1}</td>
                                        <td className='col-6'>{spacing(state)}</td>
                                        <td className='col-4'><strong>{numeral(cases).format("0,0")}</strong></td>
                                    </tr>
                                ))}
                            </tbody>}
                            {props.casesType === 'deaths' && <tbody>
                                {props.states.map(({ state, deaths }, index) => (
                                    <tr key={index}>
                                        <td className='col-2'>{index + 1}</td>
                                        <td className='col-6'>{spacing(state)}</td>
                                        <td className='col-4'><strong>{numeral(deaths).format("0,0")}</strong></td>
                                    </tr>
                                ))}
                            </tbody>}
                            {props.casesType === 'recovered' && <tbody>
                                {props.states.map(({ state, recovered }, index) => (
                                    <tr key={index}>
                                        <td className='col-2'>{index + 1}</td>
                                        <td className='col-6'>{spacing(state)}</td>
                                        <td className='col-4'><strong>{numeral(recovered).format("0,0")}</strong></td>
                                    </tr>
                                ))}
                            </tbody>}
                            {props.casesType === 'active' && <tbody>
                                {props.states.map(({ state, active }, index) => (
                                    <tr key={index}>
                                        <td className='col-2'>{index + 1}</td>
                                        <td className='col-6'>{spacing(state)}</td>
                                        <td className='col-4'><strong>{numeral(active).format("0,0")}</strong></td>
                                    </tr>
                                ))}
                            </tbody>}

                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Leader
