import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineGraph = () => {
  const initialData = [];
  const XAXISRANGE = 10 * 1000; // Show last 10 seconds of data

  const [state, setState] = useState({
    series: [
      {
        data: initialData,
      },
    ],
    options: {
      chart: {
        id: "realtime",
        height: 350,
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Heart Rate Per Second",
        align: "left",
        style: {
          color: "#F0EDFF",
        },
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        range: XAXISRANGE,
      },
      yaxis: {
        max: 180, // Assuming a reasonable maximum heart rate for adults
        min: 50, // Assuming a reasonable minimum heart rate for adults
      },
      legend: {
        show: false,
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate a new heart rate value between 60 and 100
      const newRate = Math.floor(Math.random() * 40) + 60;
      const x = new Date().getTime();

      // Add new data and remove old data to fit into view
      const updatedData = [...state.series[0].data, { x, y: newRate }].slice(
        -10
      );

      setState((prevState) => ({
        ...prevState,
        series: [
          {
            data: updatedData,
          },
        ],
      }));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [state.series]);

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineGraph;
