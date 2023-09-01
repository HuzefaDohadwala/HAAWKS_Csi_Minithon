import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HeatMapChart = () => {
  const generateData = (rows, cols) => {
    const data = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 90));
      }
      data.push(row);
    }
    return data;
  };

  const rows = 2;
  const cols = 5;

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    title: {
      text: "HeatMap Chart",
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Metric",
      data: generateData(rows, cols),
    },
  ]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={350}
      />
    </div>
  );
};

export default HeatMapChart;
