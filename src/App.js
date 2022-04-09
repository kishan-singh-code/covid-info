import "./App.css";
import React, { useState, useEffect } from "react";
import ContentArea from "./components/ContentArea";
// import NavBar from "./components/NavBar";
import WorldArea from "./components/WorldArea";
import AllCon from "./components/AllCon";
import India from "./components/India";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { sortData } from "./components/utils";
import About from "./components/About";
// import Footer from "./components/Footer";
import Contact from "./components/Contact";


export const App = () => {
  const [countries, setCountries] = useState([]);
  const [unsorted, setUnsorted] = useState([]);
  const [states, setStates] = useState([]);
  const [unsortedstate, setUnsortedState] = useState([]);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const [winsiz, setWinsiz] = useState(vw);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const [winsizhight, setWinsizhight] = useState(vh);
  const [options, setOptions] = useState([]);
  const [stateoptions, setStateOptions] = useState([]);
  const [indiaInfo, setIndiaInfo] = useState({});
  const [geoindia, setGeoIndia] = useState({});
  const [vacc, setVacc] = useState([]);


  const getCountriesData = async () => {

    // let url = "https://kishan-singh-code.github.io/jasonapi/covid/data.json";
    let url = "https://disease.sh/v3/covid-19/countries?yesterday=true";
    let dataa = await fetch(url);
    let data = await dataa.json();

    // let urla = "https://kishan-singh-code.github.io/jasonapi/covid/vacc.json";
    let urla = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30&fullData=false";
    let dataaa = await fetch(urla);
    let parsedData = await dataaa.json();
    setVacc(parsedData);

    // console.log(parsedData);

    let mix = data.map((option) => {

      if (parsedData.find(o => o.country === option.country) === undefined) {
        // console.log(option.country);
        option.active = 0;
        option.critical = 0;
      }
      else {
        let fruitObject = parsedData.find(o => o.country === option.country).timeline;
        let num = fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]];
        option.active = num;
        let i = 0;
        for (i = 0; i < 30; i++) {
          if (num - fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - i]] > 0) {
            option.critical = num - fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - i]];
            break;
          }
        }
        if (i > 27) {
          option.critical = 0;
        }
      }
    });
    // console.log(data);

    let world = { name: 'World', value: 'world' };
    let options = data.map((option) => ({
      name: option.country,
      value: option.countryInfo.iso2,
    }));
    let obj = data.find(o => o.countryInfo.iso2 === "IN");
    setIndiaInfo(obj);
    options = [world].concat(options);
    setOptions(options);
    let sortedData = sortData(data, "cases");
    setCountries(sortedData);
    setUnsorted(data);

  };




  const getStateData = async () => {

    // let url = "https://kishan-singh-code.github.io/jasonapi/covid/in.json";
    let url = "https://disease.sh/v3/covid-19/gov/in";
    let dataa = await fetch(url);
    let data = await dataa.json();

    let india = { name: 'India' };
    let options = data.states.map((option) => ({
      name: option.state,
    }));
    options = [india].concat(options);
    setStateOptions(options);


    let urla = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports";
    // let urla = "https://kishan-singh-code.github.io/jasonapi/covid/getPublicReports.json";
    let dataaa = await fetch(urla);
    let parsedData = await dataaa.json();
    parsedData = parsedData.getBeneficiariesGroupBy;



    let mix = data.states.map((option) => {

      if (parsedData.find(o => o.title === option.state) === undefined) {

        if (option.state === 'Kerala***') {
          option.active = parsedData.find(o => o.title === 'Kerala').total;
          option.partial_vaccinated = parsedData.find(o => o.title === 'Kerala').partial_vaccinated;
          option.totally_vaccinated = parsedData.find(o => o.title === 'Kerala').totally_vaccinated;
          option.precaution_dose = parsedData.find(o => o.title === 'Kerala').precaution_dose;
          option.critical = parsedData.find(o => o.title === 'Kerala').today;
        }
        else {
          option.active = parsedData.find(o => o.title === 'Dadra and Nagar Haveli').total;
          option.partial_vaccinated = parsedData.find(o => o.title === 'Dadra and Nagar Haveli').partial_vaccinated;
          option.totally_vaccinated = parsedData.find(o => o.title === 'Dadra and Nagar Haveli').totally_vaccinated;
          option.precaution_dose = parsedData.find(o => o.title === 'Dadra and Nagar Haveli').precaution_dose;
          option.critical = parsedData.find(o => o.title === 'Dadra and Nagar Haveli').today;
        }
      }
      else {
        option.active = parsedData.find(o => o.title === option.state).total;
        option.partial_vaccinated = parsedData.find(o => o.title === option.state).partial_vaccinated;
        option.totally_vaccinated = parsedData.find(o => o.title === option.state).totally_vaccinated;
        option.precaution_dose = parsedData.find(o => o.title === option.state).precaution_dose;
        option.critical = parsedData.find(o => o.title === option.state).today;
      }
    });

    // console.log(data);

    let sortedData = sortData(data.states, "cases");
    setStates(sortedData);
    setUnsortedState(data.states);

    url = "https://kishan-singh-code.github.io/jasonapi/covid/geojson/India.json";
    dataa = await fetch(url);
    parsedData = await dataa.json();
    setGeoIndia(parsedData);
  };

  useEffect(() => {
    getCountriesData();
    getStateData();
    window.onresize = () => {
      setWinsiz(window.screen.width);
      setWinsizhight(window.screen.height);
    }
  }, []);

  return (
    <div className="app">

      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/"><ContentArea winsiz={winsiz} /></Route>
          <Route exact path="/worldarea"> <WorldArea countries={countries} winsiz={winsiz} /> </Route>
          <Route exact path="/allcon"> <AllCon unsorted={unsorted} winsiz={winsiz} options={options} vacc={vacc} /> </Route>
          <Route exact path="/india"> <India unsorted={unsorted} winsiz={winsiz} options={options} stateoptions={stateoptions} unsortedstate={unsortedstate} states={states} indiaInfo={indiaInfo} geoindia={geoindia} /> </Route>
          <Route exact path="/game"> <Game winsizhight={winsizhight} winsiz={winsiz} /> </Route>
          <Route exact path="/about"><About mode={"dark"} /></Route>
          <Route exact path="/contact"><Contact mode={"dark"} /></Route>
        </Switch>
      </Router>
      {/* <button type="button" onClick={() => { setLat(55); setLong(125) }} class="btn btn-primary">Primary</button> */}
    </div>
  );
}

export default App;
