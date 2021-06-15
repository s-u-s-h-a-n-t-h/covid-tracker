import React from "react";
import { Box } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./MetaData.module.css";

const MetaData = ({ country, data }) => {
  console.log("MetaData, data:", data);
  const start = 0;
  const duration = 0.5;
  const separator = ",";
  if (data.confirmed)
    return (
      <div className={styles.metaData}>
        <Box color="rgba(255, 99, 132, 1)">
          <h3>
            <i>Cases:</i>
          </h3>
          <CountUp
            start={start}
            end={data.confirmed}
            duration={duration}
            separator={separator}
          />
        </Box>
        <Box color="rgba(54, 162, 235, 1)">
          <h3>
            <i>Recovered:</i>
          </h3>
          <CountUp
            start={start}
            end={data.recovered}
            duration={duration}
            separator={separator}
          />
        </Box>
        <Box color="rgb(244, 67, 54, 1)">
          <h3>
            <i>Deaths:</i>
          </h3>
          <CountUp
            start={start}
            end={data.deaths}
            duration={duration}
            separator={separator}
          />
        </Box>
      </div>
    );
  return null;
};

export default MetaData;
