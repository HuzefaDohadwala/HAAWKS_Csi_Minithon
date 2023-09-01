import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BubbleChart = () => {
  const [series] = useState([
    {
      name: 'Programming',
      data: [[80, 90, 50]]
    },
    {
      name: 'Communication',
      data: [[60, 65, 70]]
    },
    {
      name: 'Project Management',
      data: [[85, 75, 60]]
    },
    {
      name: 'Design',
      data: [[55, 95, 40]]
    },
    {
      name: 'Sports',
      data: [[20, 80, 30]]
    },
    {
      name: 'Singing',
      data: [[10, 95, 50]]
    },
    {
      name: 'Public Speaking',
      data: [[70, 60, 80]]
    },
    {
      name: 'Data Analysis',
      data: [[90, 70, 85]]
    },
    {
      name: 'Cooking',
      data: [[5, 70, 20]]
    },
    {
      name: 'Marketing',
      data: [[75, 65, 45]]
    },
    {
      name: 'Teaching',
      data: [[65, 85, 60]]
    },
    {
      name: 'Writing',
      data: [[60, 90, 70]]
    },
    {
      name: 'Networking',
      data: [[55, 50, 65]]
    },
    {
      name: 'Research',
      data: [[80, 70, 90]]
    },
    {
      name: 'Carpentry',
      data: [[25, 40, 35]]
    },
    {
      name: 'Photography',
      data: [[35, 85, 50]]
    },
    {
      name: 'Videography',
      data: [[40, 80, 45]]
    },
    {
      name: 'Gaming',
      data: [[5, 75, 20]]
    },
    {
      name: 'Drawing',
      data: [[10, 90, 25]]
    }
  ]);

  const options = {
    chart: {
      height: 350,
      type: 'bubble',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    title: {
      text: 'Skill Proficiency vs. Career Relevance vs. Personal Interest',
    },
    xaxis: {
      tickAmount: 12,
      type: 'numeric',
      title: {
        text: 'Relevance to Career'
      }
    },
    yaxis: {
      max: 100,
      title: {
        text: 'Personal Interest'
      }
    },
    z: {
      range: [0, 100],
      title: {
        text: 'Proficiency'
      }
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bubble" height={350} />
    </div>
  );
};

export default BubbleChart;
