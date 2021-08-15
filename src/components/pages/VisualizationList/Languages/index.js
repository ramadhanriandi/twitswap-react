import React from "react";
import { useSelector } from "react-redux";

import { ResponsiveWaffle } from "@nivo/waffle";

import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { convertTweetLanguages, getTotalData } from "./utils";

const Languages = () => {
  const { tweetLanguages } = useSelector(streamingSelector);

  const data = convertTweetLanguages(tweetLanguages);

  return (
    <div>
      <VisualizationTemplate title="Languages">
        <ResponsiveWaffle
          data={data}
          total={getTotalData(data)}
          rows={10}
          columns={10}
          colors={(data) => data.color}
          borderColor={{ from: "color", gamma: [["darker", 0.3]] }}
          animate
          motionStiffness={90}
          motionDamping={11}
          fillDirection="top"
        />
      </VisualizationTemplate>
    </div>
  );
};

export default Languages;
