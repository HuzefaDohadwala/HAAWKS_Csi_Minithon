import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChartComponent = () => {
  const options = {
    series: [40, 30, 20, 10], // These numbers could represent hours spent in each category per week, for example.
    labels: ["Work", "Family", "Hobbies", "Other"], // Labels for each segment
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: 'Work Life Balance',
    },
  };

  return (
    <div className="chart">
      <ReactApexChart options={options} series={options.series} type="donut" />
    </div>
  );
};

export default DonutChartComponent;
