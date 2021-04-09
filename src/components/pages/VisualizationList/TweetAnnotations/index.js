import React from "react";
import { Tooltip, Treemap, ResponsiveContainer } from "recharts";

import { COLORS } from "~/constants/colors";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_TWEET_DOMAINS } from "./constants";
import { StyledTweetAnnotations } from "./styles";

const TweetAnnotations = () => {
  return (
    <StyledTweetAnnotations>
      <VisualizationTemplate title="Tweet Domains">
        <ResponsiveContainer height={308} width="100%">
          <Treemap
            data={DUMMY_TWEET_DOMAINS}
            nameKey="name"
            dataKey="tweets"
            stroke={COLORS.WHITE}
            fill={COLORS.PRIMARY_1}
          >
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      </VisualizationTemplate>
    </StyledTweetAnnotations>
  );
};

export default TweetAnnotations;
