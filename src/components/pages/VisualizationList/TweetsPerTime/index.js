import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { COLORS } from "~/constants/colors";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_TWEETS_PER_TIME } from "./constants";
import { StyledTweetsPerTime } from "./styles";

const TweetsPerTime = () => {
  return (
    <StyledTweetsPerTime>
      <VisualizationTemplate title="Tweets per Time">
        <ResponsiveContainer height={308} width="100%">
          <LineChart
            data={DUMMY_TWEETS_PER_TIME}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tweets"
              stroke={COLORS.PRIMARY_1}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </VisualizationTemplate>
    </StyledTweetsPerTime>
  );
};

export default TweetsPerTime;
