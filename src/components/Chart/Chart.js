import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  console.log(props.chartDataPoints);
  let datapoints = props.chartDataPoints.map((e) => e.value);
  let maximumvalue = Math.max(...datapoints);
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max_value={maximumvalue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
