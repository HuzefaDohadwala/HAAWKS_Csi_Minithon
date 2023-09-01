import React from "react";
import ReactApexChart from "react-apexcharts";

const HeatMapChart = () => {
  const series = [
    {
      name: "Metric1",
      data: [
        { x: "Hour 1", y: "Anger", value: 45 },
        { x: "Hour 2", y: "Anger", value: 56 },
        { x: "Hour 3", y: "Anger", value: 33 },
        { x: "Hour 1", y: "Joy", value: 67 },
        { x: "Hour 2", y: "Joy", value: 43 },
        { x: "Hour 3", y: "Joy", value: 90 },
      ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    xaxis: {
      type: "category",
      categories: ["Hour 1", "Hour 2", "Hour 3"],
    },
    yaxis: {
      type: "category",
      categories: ["Anger", "Joy"],
    },
  };

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
