import React from "react";
import { useSelector } from "react-redux";
import { Tooltip, Treemap, ResponsiveContainer } from "recharts";

import { COLORS } from "~/constants/colors";
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { convertTweetDomains } from "./utils";

const TweetDomains = () => {
  const { tweetDomains } = useSelector(streamingSelector);

  return (
    <div>
      <VisualizationTemplate title="Tweet Domains">
        <ResponsiveContainer height={308} width="100%">
          <Treemap
            data={convertTweetDomains(tweetDomains)}
            nameKey="name"
            dataKey="count"
            stroke={COLORS.WHITE}
            fill={COLORS.PRIMARY_1}
          >
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      </VisualizationTemplate>
    </div>
  );
};

export default TweetDomains;
