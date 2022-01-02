import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

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
                time: {
                    parser: "MM/DD/YY",
                    tooltipFormat: "ll",
                    stepSize: 10,
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
                    stepSize: 500000,
                },
            },
        ],
    },
};

const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function Graph({ casesType }) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://kishan-singh-code.github.io/jasonapi/covid/world_120.json")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                    console.log(chartData);
                    // buildChart(chartData);
                });
        };

        fetchData();
    }, [casesType]);

    return (
        <div>
            <div className="card border-danger" style={{ height: "210px" }}>
                <div className="card-body">
                    {data?.length > 0 && (
                        <Line
                            data={{
                                datasets: [
                                    {
                                        backgroundColor: "rgba(204, 16, 52, 0.5)",
                                        borderColor: "#CC1034",
                                        data: data,
                                    },
                                ],
                            }}
                            options={options}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Graph;