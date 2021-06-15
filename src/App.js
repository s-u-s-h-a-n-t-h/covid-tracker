import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import CountrySection from "./components/CountrySection/CountrySection";
import { fetchData } from "./fetchData";
import image from "./images/covid-img.jpg";
import { Box } from "@material-ui/core";

global.jQuery = require("jquery");
require("bootstrap");

class App extends Component {
  state = {
    country: "",
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ country, data });
  };

  render() {
    const { country, data } = this.state;
    return (
      <div>
        <Box display="flex" justifyContent="center">
          <img src={image} alt="Covid-19 informateion" />
        </Box>
        <div className="container">
          <Box display="flex" justifyContent="center">
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Box>
          {data.countryData && <CountrySection country={country} data={data} />}
        </div>
      </div>
    );
  }
}

export default App;
