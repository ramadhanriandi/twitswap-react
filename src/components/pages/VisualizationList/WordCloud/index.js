import React from "react";
import { useSelector } from "react-redux";
import { TagCloud } from "react-tagcloud";

import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { StyledWordCloud } from "./styles";
import { convertTweetWords, getRandomNumber } from "./utils";

const WordCloud = () => {
  const { tweetWords } = useSelector(streamingSelector);

  return (
    <StyledWordCloud>
      <VisualizationTemplate title="Word Cloud">
        <TagCloud
          minSize={8}
          maxSize={24}
          tags={convertTweetWords(tweetWords)}
          randomNumberGenerator={getRandomNumber}
          disableRandomColor
        />
      </VisualizationTemplate>
    </StyledWordCloud>
  );
};

export default WordCloud;
