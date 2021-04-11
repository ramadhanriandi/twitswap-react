import React from "react";
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

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_TOP_HASHTAGS } from "./constants";

const TopHashtags = () => {
  return (
    <div>
      <VisualizationTemplate title="Top Hashtags">
        <ResponsiveContainer height={308} width="100%">
          <BarChart
            data={DUMMY_TOP_HASHTAGS}
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
