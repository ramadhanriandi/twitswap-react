import React from "react";
import { useSelector } from "react-redux";
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
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { convertIntervalTweetTypes } from "./utils";

const TweetsPerTime = () => {
  const { tweetTypes } = useSelector(streamingSelector);

  return (
    <div>
      <VisualizationTemplate title="Tweets per Time">
        <ResponsiveContainer height={308} width="100%">
          <LineChart
            data={convertIntervalTweetTypes(tweetTypes.interval)}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
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
    </div>
  );
};

export default TweetsPerTime;
