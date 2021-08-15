import React from "react";
import { useSelector } from "react-redux";

import { ResponsiveBubbleHtml } from "@nivo/circle-packing";

import { COLORS } from "~/constants/colors";
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { convertTweetAnnotations } from "./utils";

const TweetAnnotations = () => {
  const { tweetAnnotations } = useSelector(streamingSelector);

  return (
    <div>
      <VisualizationTemplate title="Tweet Annotations">
        <ResponsiveBubbleHtml
          root={convertTweetAnnotations(tweetAnnotations)}
          identity="name"
          value="count"
          colors={COLORS.PRIMARY_1}
          colorBy="count"
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
          isZoomable={false}
        />
      </VisualizationTemplate>
    </div>
  );
};

export default TweetAnnotations;
