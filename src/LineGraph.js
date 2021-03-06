import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },

        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,

          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const LineGraph = ({ casesType = "cases", ...props }) => {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType = "cases") => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };
  const [borderColor, setBorderColor] = useState(["#CC1034"]);
  const [backgroundColor, setBackgroundColor] = useState([
    "rgba(204, 16, 52, 0.5)",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=60")
        .then((response) => response.json())
        .then((data) => {
          console.log("first data", data);
          const chartData = buildChartData(data, casesType);
          setData(chartData);
          casesType === "recovered"
            ? setBorderColor("#008000")
            : setBorderColor("#CC1034");
          casesType === "recovered"
            ? setBackgroundColor("rgb(102,177,134)")
            : setBackgroundColor("rgba(204, 16, 52, 0.5)");
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: `${backgroundColor}`,
                borderColor: `${borderColor}`,
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default LineGraph;
