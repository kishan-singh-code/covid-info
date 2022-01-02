import "./App.css";
import React, { useState, useEffect } from "react";
import ContentArea from "./components/ContentArea";
import NavBar from "./components/NavBar";
import WorldArea from "./components/WorldArea";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { sortData } from "./components/utils";

export const App = () => {

  const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState("worldwide");
  // const [threeCardButtom, setThreeCardButtom] = useState([0, 0, 0])
  // const [threeCardContent, setThreeCardContent] = useState([0, 0, 0])
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const [winsiz, setWinsiz] = useState(vw);


  const getCountriesData = async () => {
    await fetch("https://kishan-singh-code.github.io/jasonapi/covid/data.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = sortData(data);
        setCountries(sortedData);
      });
  };

  useEffect(() => {
    getCountriesData();
    window.onresize = () => {
      setWinsiz(window.screen.width)
    }
  }, []);
  // console.log(countries)

  return (
    <div className="app">

      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/"><ContentArea winsiz={winsiz} /></Route>

          <Route exact path="/worldarea"> <WorldArea countries={countries} /> </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
