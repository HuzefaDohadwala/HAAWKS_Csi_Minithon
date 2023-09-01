import React from "react";
import ReactApexChart from "react-apexcharts";

const HeatMapChart = () => {
  const options = {
    chart: {
      type: "heatmap",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    title: {
      text: "Transactions HeatMap",
      style: {
        color: "#F0EDFF",
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#F0EDFF",
        },
      },
    },
    yaxis: {
      type: "category",
      categories: ["Food", "Luxuries", "Utilities", "Health"],
      title: {
        text: "Categories",
      },
      labels: {
        style: {
          colors: "#F0EDFF",
        },
      },
    },
  };

  const series = [
    {
      name: "Food",
      data: [400, 300, 500, 450, 600, 400, 350, 370, 470, 480, 450, 460],
    },
    {
      name: "Luxuries",
      data: [300, 400, 250, 350, 320, 300, 330, 310, 280, 290, 310, 315],
    },
    {
      name: "Utilities",
      data: [100, 330, 210, 105, 95, 200, 90, 445, 295, 92, 90, 288],
    },
    {
      name: "Health",
      data: [600, 180, 220, 505, 210, 215, 210, 420, 230, 225, 235, 440],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={300}
      />
    </div>
  );
};

export default HeatMapChart;
