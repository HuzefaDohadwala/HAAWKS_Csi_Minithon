import React from 'react';
import Radar from './Radar';
import HeatMapChart from './HeatMapChart';
import DonutChartComponent from './DonutChartComponent';

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
    </>
  );
};

export default Dashboard;
