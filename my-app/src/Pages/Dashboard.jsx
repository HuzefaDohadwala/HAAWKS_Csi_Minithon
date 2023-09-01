import React from "react";
import Radar from "../Components/Radar";
import HeatMapChart from "../Components/HeatMapChart";
import DonutChartComponent from "../Components/DonutChartComponent";
import BubbleChart from "../Components/BubbleChart";
import AreaGraph from "../Components/AreaGraph";
import LineGraph from "../Components/LineGraph";

const Dashboard = () => {
  return (
    <div className="pt-16 bg-black">
      <div className="flex items-center">
        <div className="flex-1 chart_radar">
          <Radar />
        </div>
        <div className="flex-1 chart_heatmap">
          <HeatMapChart />
        </div>
        <div className="flex-1 chart_donut">
          <DonutChartComponent />
        </div>
      </div>
      <div>
        <div className="flex-1 chart_bubble">
          <BubbleChart></BubbleChart>
        </div>
        <div className="flex-1 chart_area">
          <AreaGraph></AreaGraph>
        </div>
        <div className="flex-1 chart_line">
          <LineGraph> </LineGraph>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
