import React from "react";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { COLORS } from "~/constants/colors";
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

const TopHashtags = () => {
  const { tweetHashtags } = useSelector(streamingSelector);

  return (
    <div>
      <VisualizationTemplate title="Top Hashtags">
        <ResponsiveContainer height={308} width="100%">
          <BarChart
            data={tweetHashtags}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="count" fill={COLORS.PRIMARY_1} />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
      </VisualizationTemplate>
    </div>
  );
};

export default TopHashtags;
