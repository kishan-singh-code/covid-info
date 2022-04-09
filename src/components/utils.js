import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";


let statelist = [
    {
        state_id: 1,
        state: "Andaman and Nicobar Islands",
        lat: 12.6,
        long: 92.8,
        flag: "https://upload.wikimedia.org/wikipedia/en/c/cd/Seal_of_Andaman_and_Nicobar_Islands.png",
        population: 380581,
        capital: "Port Blair",
        language: "Bengali,Hindi",
    },
    {
        state_id: 2,
        state: "Andhra Pradesh",
        lat: 15,
        long: 79.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/3/37/Emblem_of_Andhra_Pradesh.svg",
        population: 49577103,
        capital: "Amaravati",
        language: "Telugu,Urdu",
    },
    {
        state_id: 3,
        state: "Arunachal Pradesh",
        lat: 28.4,
        long: 94.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c2/..Arunachal_Pradesh_Flag%28INDIA%29.png",
        population: 1383727,
        capital: "Itanagar",
        language: "Nishi,Adi",
    },
    {
        state_id: 4,
        state: "Assam",
        lat: 26,
        long: 92.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Seal_of_Assam.svg",
        population: 31205576,
        capital: "Dispur",
        language: "Assamese,Bengali",
    },
    {
        state_id: 5,
        state: "Bihar",
        lat: 25.8,
        long: 85.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Seal_of_Bihar.svg",
        population: 104099452,
        capital: "Patna",
        language: "Hindi,Maithili",
    },
    {
        state_id: 6,
        state: "Chandigarh",
        lat: 30.7,
        long: 76.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/..Chandigarh_Flag%28INDIA%29.png",
        population: 1055450,
        capital: "Chandigarh",
        language: "Hindi,Punjabi",
    },
    {
        state_id: 7,
        state: "Chhattisgarh",
        lat: 21.5,
        long: 81.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/..Chhattisgarh_Flag%28INDIA%29.png",
        population: 25545198,
        capital: "Raipur",
        language: "Hindi,Odia",
    },
    {
        state_id: 8,
        state: "Dadra and Nagar Haveli and Daman and Diu",
        lat: 20.7,
        long: 70.9,
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Dadra_and_Nagar_Haveli_and_Daman_and_Diu_emblem.png",
        population: 585764,
        capital: "Daman",
        language: "Gujarati,Hindi",
    },
    {
        state_id: 9,
        state: "Delhi",
        lat: 28.6,
        long: 77.3,
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_the_National_Capital_Territory_of_Delhi.svg",
        population: 16787941,
        capital: "New Delhi",
        language: "Hindi,Punjabi",
    },
    {
        state_id: 10,
        state: "Goa",
        lat: 15.4,
        long: 74,
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Goa_government_banner.png",
        population: 1458545,
        capital: "Panaji",
        language: "Konkani,Marathi",
    },
    {
        state_id: 11,
        state: "Gujarat",
        lat: 22.8,
        long: 71.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Government_Of_Gujarat_Seal_In_All_Languages.svg",
        population: 60439692,
        capital: "Gandhinagar",
        language: "Gujarati,Hindi",
    },
    {
        state_id: 12,
        state: "Haryana",
        lat: 29.2,
        long: 75.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Emblem_of_Haryana.svg",
        population: 25351462,
        capital: "Chandigarh",
        language: "Hindi,Punjabi",
    },
    {
        state_id: 13,
        state: "Himachal Pradesh",
        lat: 32,
        long: 77.1,
        flag: "https://upload.wikimedia.org/wikipedia/commons/7/76/Himachal_Pradesh_Flag%2C_India.png",
        population: 6864602,
        capital: "Shimla",
        language: "Hindi,Punjabi",
    },
    {
        state_id: 14,
        state: "Jammu and Kashmir",
        lat: 33.6,
        long: 75,
        flag: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Government_of_Jammu_and_Kashmir.svg",
        population: 12267032,
        capital: "Srinagar,Jammu",
        language: "Kashmiri,Dogri",
    },
    {
        state_id: 15,
        state: "Jharkhand",
        lat: 23.3,
        long: 85,
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Jharkhand_Rajakiya_Chihna.svg",
        population: 32988134,
        capital: "Ranchi",
        language: "Hindi,Santali",
    },
    {
        state_id: 16,
        state: "Karnataka",
        lat: 14.4,
        long: 75.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Seal_of_Karnataka.svg",
        population: 61095297,
        capital: "Bengaluru",
        language: "Kannada,Urdu",
    },
    {
        state_id: 17,
        state: "Kerala***",
        lat: 10.25,
        long: 76,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Government_of_Kerala_Logo.svg",
        population: 33406061,
        capital: "Thiruvananthapuram",
        language: "Malayalam,Tamil",
    },
    {
        state_id: 18,
        state: "Ladakh",
        lat: 34.1,
        long: 77.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Seal_of_Ladakh.png",
        population: 274000,
        capital: "Leh",
        language: "Kashmiri,Dogri",
    },
    {
        state_id: 19,
        state: "Lakshadweep",
        lat: 10.3,
        long: 72.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/46/Banner_of_Lakshadweep.png",
        population: 64473,
        capital: "Kavaratti",
        language: "Malayalam,Dhivehi",
    },
    {
        state_id: 20,
        state: "Madhya Pradesh",
        lat: 23.2,
        long: 77.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Emblem_of_Madhya_Pradesh.svg",
        population: 72626809,
        capital: "Bhopal",
        language: "Hindi,Marathi",
    },
    {
        state_id: 21,
        state: "Maharashtra",
        lat: 19.3,
        long: 75,
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Maharashtra_Emblem_transparent.png",
        population: 112374333,
        capital: "Mumbai",
        language: "Marathi,Hindi",
    },
    {
        state_id: 22,
        state: "Manipur",
        lat: 24.7,
        long: 93.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/8b/..Manipur_Flag%28INDIA%29.png",
        population: 2570390,
        capital: "Imphal",
        language: "Meitei,Nepali",
    },
    {
        state_id: 23,
        state: "Meghalaya",
        lat: 25.5,
        long: 91.1,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Seal_of_Meghalaya.svg",
        population: 2966889,
        capital: "Shillong",
        language: "English,Garo",
    },
    {
        state_id: 24,
        state: "Mizoram",
        lat: 23.2,
        long: 92.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Seal_of_Mizoram.svg",
        population: 1097206,
        capital: "Aizawl",
        language: "Mizo,English",
    },
    {
        state_id: 25,
        state: "Nagaland",
        lat: 26.1,
        long: 94.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/..Nagaland_Flag%28INDIA%29.png",
        population: 1978502,
        capital: "Kohima",
        language: "Naga languages,English",
    },
    {
        state_id: 26,
        state: "Odisha",
        lat: 20.6,
        long: 84.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Orissa_Flag%28INDIA%29.png",
        population: 41974219,
        capital: "Bhubaneswar",
        language: "Odia,Hindi",
    },
    {
        state_id: 27,
        state: "Puducherry",
        lat: 11.9,
        long: 79.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Seal_of_Puducherry.svg",
        population: 1247953,
        capital: "Pondicherry",
        language: "Tamil,Telugu",
    },
    {
        state_id: 28,
        state: "Punjab",
        lat: 31,
        long: 75.2,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Seal_of_Punjab.svg",
        population: 27743338,
        capital: "Chandigarh",
        language: "Punjabi,Hindi",
    },
    {
        state_id: 29,
        state: "Rajasthan",
        lat: 26.8,
        long: 73.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Emblem_Rajasthan.png",
        population: 68548437,
        capital: "Jaipur",
        language: "Hindi,Punjabi",
    },
    {
        state_id: 30,
        state: "Sikkim",
        lat: 27.5,
        long: 88.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Seal_of_Sikkim.svg",
        population: 610577,
        capital: "Gangtok",
        language: "Nepali,Hindi",
    },
    {
        state_id: 31,
        state: "Tamil Nadu",
        lat: 10.9,
        long: 79,
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/81/TamilNadu_Logo.svg",
        population: 72147030,
        capital: "Chennai",
        language: "Tamil,Telugu",
    },
    {
        state_id: 32,
        state: "Telangana",
        lat: 17.8,
        long: 79,
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Government_of_Telangana_Logo.png",
        population: 35003674,
        capital: "Hyderabad",
        language: "Telugu,Urdu",
    },
    {
        state_id: 33,
        state: "Tripura",
        lat: 23.7,
        long: 91.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Seal_of_Tripura.svg",
        population: 3673917,
        capital: "Agartala",
        language: "Bengali,Kokborok",
    },
    {
        state_id: 35,
        state: "Uttarakhand",
        lat: 30.3,
        long: 79.1,
        flag: "https://upload.wikimedia.org/wikipedia/en/9/99/Seal_of_Uttarakhand.svg",
        population: 10086292,
        capital: "Dehradun,Gairsain",
        language: "Hindi,Urdu",
    },
    {
        state_id: 34,
        state: "Uttar Pradesh",
        lat: 27,
        long: 80.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_Uttar_Pradesh.svg",
        population: 199812341,
        capital: "Lucknow",
        language: "Hindi,Urdu",
    },
    {
        state_id: 36,
        state: "West Bengal",
        lat: 23.2,
        long: 87.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Emblem_of_West_Bengal.svg",
        population: 91276115,
        capital: "Kolkata",
        language: "Bengali,Hindi",
    }

]









const casesTypeColors = {
    cases: {
        hex: "#782bf4",
        rgb: "rgb(204, 16, 52)",
        half_op: "rgba(204, 16, 52, 0.5)",
        // multiplier: 120,
        multiplier: 120,
    },
    recovered: {
        hex: "#00ba00",
        rgb: "rgb(125, 215, 29)",
        half_op: "rgba(125, 215, 29, 0.5)",
        // multiplier: 150,
        multiplier: 150,
    },
    deaths: {
        hex: "#ff0000",
        rgb: "rgb(251, 68, 67)",
        half_op: "rgba(251, 68, 67, 0.5)",
        // multiplier: 900,
        multiplier: 900,
    },
    active: {
        hex: "#0d6efd",
        rgb: "rgb(251, 68, 67)",
        half_op: "rgba(251, 68, 67, 0.5)",
        // multiplier: 900,
        multiplier: 30,
    },
    active_i: {
        hex: "#0d6efd",
        rgb: "rgb(251, 68, 67)",
        half_op: "rgba(251, 68, 67, 0.5)",
        // multiplier: 900,
        multiplier: 20,
    },
};







export const sortData = (data, type) => {
    let sortedData = [...data];
    if (type === "cases") {
        sortedData.sort((a, b) => {
            if (a.cases > b.cases) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    if (type === "deaths") {
        sortedData.sort((a, b) => {
            if (a.deaths > b.deaths) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    if (type === "recovered") {
        sortedData.sort((a, b) => {
            if (a.recovered > b.recovered) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    if (type === "active") {
        sortedData.sort((a, b) => {
            if (a.active > b.active) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    return sortedData;
};



export const stateAll = (data) => {
    let obj = statelist.find(o => o.state === data);
    return obj;
};








export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
    data.map((country) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            pathOptions={{
                color: casesTypeColors[casesType].hex,
                fillColor: casesTypeColors[casesType].hex,
                fillOpacity: 0.4,
                weight: 1.5
            }}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div class="card bod">
                    <img src={country.countryInfo.flag} class="card-img-top" alt="..." />
                    <div class="card-body body_pad text-center">
                        {/* <h5 class="card-title">{country.country}</h5> */}
                        <p class="card-text con">{country.country}</p>
                        <p class="card-text">Cases: {prettyPrintStat(country.cases)}</p>
                        <p class="card-text">Recovered: {prettyPrintStat(country.recovered)}</p>
                        <p class="card-text">Vaccinated: {prettyPrintStat(country.active)}</p>
                        <p class="card-text">Deaths: {prettyPrintStat(country.deaths)}</p>
                    </div>
                </div>
            </Popup>
        </Circle>
    ));


export const showDataOnMapState = (data, casesType = "cases") =>
    data.map((country, index) => (

        <Circle
            center={[statelist[index].lat, statelist[index].long]}
            pathOptions={{
                color: casesTypeColors[casesType].hex,
                fillColor: casesTypeColors[casesType].hex,
                fillOpacity: 0.4,
                weight: 1.5
            }}
            radius={
                casesType === 'active' ? Math.sqrt(country[casesType]) * casesTypeColors["active_i"].multiplier : Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div class="card bod">
                    {/* <img src={country.countryInfo.flag} class="card-img-top" alt="..." /> */}
                    <div class="card-body body_pad text-center">
                        {/* <h5 class="card-title">{country.country}</h5> */}
                        <p class="card-text con">{country.state}</p>
                        <p class="card-text">Cases: {prettyPrintStat(country.cases)}</p>
                        <p class="card-text">Recovered: {prettyPrintStat(country.recovered)}</p>
                        <p class="card-text">Vaccinated: {prettyPrintStat(country.active)}</p>
                        <p class="card-text">Deaths: {prettyPrintStat(country.deaths)}</p>
                    </div>
                </div>
            </Popup>
        </Circle>
    ));


export const spacing = (data) => {
    let obj;
    if (data === "Jammu and Kashmir") {
        obj = "J & K";
        return obj;
    }
    if (data === "Arunachal Pradesh") {
        obj = "Arunachal";
        return obj;
    }
    if (data === "Dadra and Nagar Haveli and Daman and Diu") {
        obj = "Daman and Diu";
        return obj;
    }
    if (data === "Andaman and Nicobar Islands") {
        obj = "Andaman Islands";
        return obj;
    }
    if (data === "Kerala***") {
        obj = "Kerala";
        return obj;
    }
    else {
        return data;
    }
};
