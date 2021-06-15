import React, { Component } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../fetchData";
import styles from "./CountryPicker.module.css";

class CountryPicker extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const countries = await fetchCountries();
    this.setState({ countries });
  }

  render() {
    const { countries } = this.state;
    const { handleCountryChange } = this.props;
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
}

export default CountryPicker;
