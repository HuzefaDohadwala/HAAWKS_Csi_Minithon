import React from 'react';
import ApexCharts from 'react-apexcharts';

const AreaGraph = () => {
  const options = {
    series: [
      {
        name: 'Daily Steps',
        data: [4000, 3000, 7000, 5000, 10000, 4000, 6000] // Steps taken daily
      }
    ],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2023-08-25T00:00:00.000Z",
        "2023-08-26T00:00:00.000Z",
        "2023-08-27T00:00:00.000Z",
        "2023-08-28T00:00:00.000Z",
        "2023-08-29T00:00:00.000Z",
        "2023-08-30T00:00:00.000Z",
        "2023-08-31T00:00:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

export default AreaGraph;
