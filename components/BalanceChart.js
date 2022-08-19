import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const data = {
  labels: [
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#3773f5",
      borderColorCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={400}></Line>
    </Wrapper>
  );
};

export default BalanceChart;

const Wrapper = styled.div`
  //   margin-top: 21rem;
`;
