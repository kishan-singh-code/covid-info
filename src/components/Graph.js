import React, { useState, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import numeral from "numeral";
import "./css/Graph.css";
import img_3 from "./img/bhb.gif"


const options = {

    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },

    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                // align: 'center',
                type: "time",
                // distribution: 'series',
                time: {
                    parser: "MM/DD/YY",
                    tooltipFormat: "ll",
                    stepSize: 5,
                },

            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: true,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                    // stepSize: 500000,
                    suggestedMin: 50,
                    suggestedMax: 100
                },

            },
        ],
    },
};


const casesTypeColors = {
    cases: {
        hex: "#782bf4",
        hexop: "rgba(120, 43, 244, 0.3)",
        stepbro: 500000,
        // options: options1
    },
    recovered: {
        hex: "#00ba00",
        hexop: "rgba(0, 186, 0, 0.3)",
        stepbro: 5000,
        // options: options2
    },
    deaths: {
        hex: "#ff0000",
        hexop: "rgba(255, 0, 0, 0.3)",
        stepbro: 5000,
        // options: options2
    },
    active: {
        hex: "#0d6efd",
        hexop: "rgba(13, 110, 253, 0.3)",
        stepbro: 5000,
    },
};




const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    if (casesType === "active") {

        for (let date in data) {
            if (lastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: (data[date] - lastDataPoint) < 0 ? 0 : (data[date] - lastDataPoint),
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[date];
        }

    }
    else {
        for (let date in data.cases) {
            if (lastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: (data[casesType][date] - lastDataPoint) < 0 ? 0 : (data[casesType][date] - lastDataPoint),
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }
    }

    // console.log(chartData);

    return chartData;
};

// MM / DD / YY

const buildChartDataIndia = (data) => {

    let options = data.map((option) => ({
        x: option.vaccine_date.slice(5, 7) + '/' + option.vaccine_date.slice(8, 10) + '/' + option.vaccine_date.slice(2, 4),
        y: option.total,
    }));
    // console.log(options);
    return options;
};


// const lota = [20, 20, 20];


function Graph({ casesType = "cases", countryName, vacc, check, statename, unsortedstate }) {
    const [data, setData] = useState({});
    const [pata, setPata] = useState([]);
    const [checkpata, setCheckPata] = useState(0);

    const douData = () => {
        // let check_pata = 0;
        if (statename !== "India") {
            const obj = unsortedstate.find(o => o.state === statename);
            if (obj.precaution_dose / (obj.precaution_dose + obj.partial_vaccinated + obj.totally_vaccinated) > 0.06) {

                setPata([obj.precaution_dose, obj.partial_vaccinated, obj.totally_vaccinated]);
                setCheckPata(1);
            }
            else {
                setPata([obj.precaution_dose * 30, obj.partial_vaccinated, obj.totally_vaccinated]);
                setCheckPata(0);
            }
        }
    }


    useEffect(() => {
        const fetchData = async () => {

            if (countryName === "world") {
                if (casesType === "active") {
                    // await fetch("https://kishan-singh-code.github.io/jasonapi/covid/world_120_vacc.json")
                    await fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=false")
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            let chartData = buildChartData(data, casesType);
                            setData(chartData);

                        });
                }
                else {
                    // await fetch("https://kishan-singh-code.github.io/jasonapi/covid/world_120.json")
                    await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            let chartData = buildChartData(data, casesType);
                            setData(chartData);

                        });
                }
            }
            else {

                if (casesType === "active") {
                    if (check === 2) {
                        // console.log('hello');
                        let url = "https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports";
                        // let url = "https://kishan-singh-code.github.io/jasonapi/covid/getVacPublicReports.json";
                        let data = await fetch(url);
                        let parsedData = await data.json();
                        // console.log(parsedData.last30DaysVaccination);
                        let chartData = buildChartDataIndia(parsedData.last30DaysVaccination);
                        setData(chartData);

                    }
                    else {
                        let obj = vacc.find(o => o.country === countryName);
                        let chartData = buildChartData(obj.timeline, casesType);
                        setData(chartData);
                    }

                }
                else {
                    // await fetch("https://kishan-singh-code.github.io/jasonapi/covid/all_countries_120.json")
                    await fetch("https://disease.sh/v3/covid-19/historical?lastdays=30")
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            let obj = data.find(o => o.country === countryName);
                            let chartData = buildChartData(obj.timeline, casesType);
                            setData(chartData);

                        });
                }
            }

            // console.log(unsortedstate);

        };


        fetchData();
        douData();
    }, [casesType, countryName, statename]);

    console.log(data);

    return (
        <div>
            <div className="card " style={{ height: "270px", borderRadius: "8px" }}>
                {statename === 'India' ? <div className="card-body padd_map">
                    {data.length > 0 ? (
                        <Line
                            data={{
                                datasets: [
                                    {
                                        backgroundColor: casesTypeColors[casesType].hexop,
                                        borderColor: casesTypeColors[casesType].hex,
                                        data: data,
                                        borderWidth: 2,
                                        borderCapStyle: "round"
                                    },
                                ],
                            }}
                            options={options}
                        />
                    ) : (
                        <>
                            <img src={img_3} class="img_fit_con_lol" alt="..." />
                            <p class="text-center">API is Sleeping. . . .</p>
                        </>
                    )}
                </div> : <div className="card-body padd_map">
                    {pata?.length > 0 && (
                        <Doughnut data={{
                            labels: ['Precaution Dose', 'Dose 1', 'Dose 2'],
                            datasets: [
                                {
                                    data: pata,
                                    backgroundColor: ['#ff000094', '#0070ff94', '#26ff0094'],
                                    borderWidth: 2,
                                    borderColor: ['#ff0000', '#0070ff', '#26ff00'],
                                    hoverBorderWidth: 5,
                                },
                            ],
                        }}
                            options={{
                                maintainAspectRatio: false,
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem, pata) {
                                            var label = pata.labels[tooltipItem.index] || '';
                                            // console.log(tooltipItem.index);
                                            // console.log(pata);
                                            if (label) {
                                                let lol;
                                                if (checkpata === 1) {
                                                    lol = pata.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                                }
                                                else {
                                                    if (tooltipItem.index === 0) {
                                                        lol = pata.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / 30;
                                                    }
                                                    else {
                                                        lol = pata.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                                    }
                                                }

                                                label = label + ' : ' + lol;
                                            }
                                            // label += Math.round(tooltipItem.yLabel * 100) / 100;
                                            return label;
                                        }
                                    }
                                }
                            }} />
                    )}

                </div>}
                {statename !== 'India' && <div class="card-footer text-center">Vaccination Dose  </div>}
            </div>
        </div>
    );
}

export default Graph;