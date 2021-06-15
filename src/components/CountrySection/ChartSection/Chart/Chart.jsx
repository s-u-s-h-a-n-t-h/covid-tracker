import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ country, data }) => {
  const label = country ? `Covid Chart for ${country}` : "Global Covid chart";
  const chartData = {
    labels: ["Cases", "Recovered", "Deaths"],
    datasets: [
      {
        label: label,
        data: [data.confirmed, data.recovered, data.deaths],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgb(244, 67, 54, 0.4)",
        ],
      },
    ],
  };

  const chartOptions = {
    legend: { display: false },
    title: { display: true, text: label },
  };

  return (
    <div>
      <Bar data={chartData} options={{ plugins: chartOptions }} />
    </div>
  );
};

export default Chart;
