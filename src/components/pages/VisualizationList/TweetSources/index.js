import React from "react";
import { useSelector } from "react-redux";
import {
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { SENTIMENT_COLORS } from "./constants";
import { convertTweetSources } from "./utils";

const TweetSources = () => {
  const { tweetSources } = useSelector(streamingSelector);

  const convertedTweetSources = convertTweetSources(tweetSources);

  return (
    <div>
      <VisualizationTemplate title="Sources">
        <ResponsiveContainer height={308} width="100%">
          <PieChart>
            <Pie
              data={convertedTweetSources}
              innerRadius={80}
              paddingAngle={1}
              dataKey="value"
            >
              {convertedTweetSources.map((entry) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={SENTIMENT_COLORS[entry.name]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </VisualizationTemplate>
    </div>
  );
};

export default TweetSources;
