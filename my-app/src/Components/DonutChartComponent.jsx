import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChartComponent = () => {
  const options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className="chart">
      <ReactApexChart options={options} series={options.series} type="donut" />
    </div>
  );
};

export default DonutChartComponent;
