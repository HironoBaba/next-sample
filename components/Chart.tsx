import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const labels = ["11/11", "11/12", "11/13", "11/14"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "ひるごはん",
        data: [1, 7, 8, 5],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "よるごはん",
        data: [52, 64, 62, 75],
        borderColor: "rgb(75, 100, 192)",
      },
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
    scales : {
        yAxes : [{
          type : 'time',
          time : {
            parser: 'HH:mm',
                unit: 'hour',
                stepSize: 1,
                displayFormats: {
                    'hour': 'HH:mm'
                }
          },
        }]
      }
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };

  return (
    <div className="App" style={divStyle}>
      <Line
        height={300}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
}

export default Chart;