import React from 'react';
import Radar from '../Components/Radar';
import HeatMapChart from '../Components/HeatMapChart';
import DonutChartComponent from '../Components/DonutChartComponent';
import BubbleChart from '../Components/BubbleChart';
import AreaGraph from '../Components/AreaGraph';
import LineGraph from '../Components/LineGraph';


const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className="chart_radar">
        <Radar />
      </div>
      <div className="chart_heatmap">
        <HeatMapChart />
      </div>
      <div className="chart_donut">
        <DonutChartComponent />
      </div>
      <div className="chart_bubble">
      <BubbleChart></BubbleChart>
      </div>
      <div className="chart_area">
      <AreaGraph></AreaGraph>
      </div>
      <div className="chart_line">
      <LineGraph> </LineGraph>
      </div>
    </>
  );
};

export default Dashboard;
