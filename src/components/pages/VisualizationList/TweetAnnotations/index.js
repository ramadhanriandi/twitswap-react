import React from "react";

import { ResponsiveBubbleHtml } from "@nivo/circle-packing";

import { COLORS } from "~/constants/colors";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_TWEET_ANNOTATIONS } from "./constants";
import { StyledTweetAnnotations } from "./styles";

const TweetAnnotations = () => {
  return (
    <StyledTweetAnnotations>
      <VisualizationTemplate title="Tweet Annotations">
        <ResponsiveBubbleHtml
          root={DUMMY_TWEET_ANNOTATIONS}
          identity="name"
          value="value"
          colors={COLORS.PRIMARY_1}
          colorBy="value"
          leavesOnly={true}
          enableLabel={true}
          label="id"
          labelSkipRadius={24}
          labelTextColor={COLORS.WHITE}
          borderWidth={2}
          borderColor={COLORS.WHITE}
          tooltip={({ id, value, color }) => (
            <p style={{ color }}>
              {id}: {value}
            </p>
          )}
        />
      </VisualizationTemplate>
    </StyledTweetAnnotations>
  );
};

export default TweetAnnotations;
