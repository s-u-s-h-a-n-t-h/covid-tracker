import React from "react";
import MetaData from "./MetaData/MetaData";
import Chart from "./Chart/Chart";
import styles from "./ChartSection.module.css";

const ChartSection = ({ country, data }) => {
  return (
    <div className={styles.chartSection}>
      <div>
        <MetaData country={country} data={data} />
      </div>
      <div className={styles.chart}>
        <Chart country={country} data={data} />
      </div>
    </div>
  );
};

export default ChartSection;
