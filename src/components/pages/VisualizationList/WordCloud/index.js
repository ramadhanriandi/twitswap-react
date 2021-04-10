import React from "react";

import { TagCloud } from "react-tagcloud";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_WORD_CLOUD_DATA } from "./constants";
import { StyledWordCloud } from "./styles";
import { getRandomNumber } from "./utils";

const WordCloud = () => {
  return (
    <StyledWordCloud>
      <VisualizationTemplate title="Word Cloud">
        <TagCloud
          minSize={12}
          maxSize={36}
          tags={DUMMY_WORD_CLOUD_DATA}
          randomNumberGenerator={getRandomNumber}
          disableRandomColor
        />
      </VisualizationTemplate>
    </StyledWordCloud>
  );
};

export default WordCloud;
