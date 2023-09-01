import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import ReactApexChart from "react-apexcharts";

const Radar = (props) => {
  const [series, setSeries] = useState([
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radar",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    title: {
      text: "Psychological dimensions",
      style: {
        color: "#F0EDFF",
      },
    },
    colors: ["#FF4560"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "Openness",
        "Conscientiousness",
        "Extraversion",
        "Agreeableness",
        "Neuroticism",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default Radar;
