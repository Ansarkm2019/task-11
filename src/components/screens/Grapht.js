import React from "react";
import styled from 'styled-components';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    Female_Guest: 500,
    Male_Guest: 690,
    Total_Guest: 4300,
    amt: 2100
  }
];

export default function Grapht() {
  return (
    <>

    <GraphContainer>
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total_Guest" stackId="a" fill="#000" />
        <Bar dataKey="Female_Guest" stackId="a" fill="#D2A2F7" />
        <Bar dataKey="Male_Guest" stackId="a" fill="#A5E3E3" />
        </BarChart>
    </GraphContainer>
    </>
  );
}

const GraphContainer = styled.section`
    width: 57%;
    margin-top: 80px;
`;
