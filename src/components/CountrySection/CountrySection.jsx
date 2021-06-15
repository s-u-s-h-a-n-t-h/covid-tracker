import React from "react";
import ProvincesTable from "./../ProvincesTable/ProvincesTable";
import { Box } from "@material-ui/core";
import ChartSection from "./ChartSection/ChartSection";

const CountrySection = ({ country, data: { countryData, provincesData } }) => {
  return (
    <React.Fragment>
      <ChartSection country={country} data={countryData} />
      <div>
        <br />
        <br />
        {country && (
          <h3>
            <i>
              <u>Detailed Provinces/States info:</u>
            </i>
          </h3>
        )}
        <Box display="flex" justifyContent="center">
          <ProvincesTable country={country} data={provincesData} />
        </Box>
      </div>
    </React.Fragment>
  );
};

export default CountrySection;
