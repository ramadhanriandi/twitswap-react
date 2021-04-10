import React from "react";

import { ResponsiveWaffle } from "@nivo/waffle";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_LANGUAGE_DATA } from "./constants";
import { StyledLanguages } from "./styles";
import { getTotalData } from "./utils";

const Languages = () => {
  return (
    <StyledLanguages>
      <VisualizationTemplate title="Languages">
        <ResponsiveWaffle
          data={DUMMY_LANGUAGE_DATA}
          total={getTotalData(DUMMY_LANGUAGE_DATA)}
          rows={10}
          columns={10}
          colors={(data) => data.color}
          borderColor={{ from: "color", gamma: [["darker", 0.3]] }}
          animate={true}
          motionStiffness={90}
          motionDamping={11}
          fillDirection="top"
        />
      </VisualizationTemplate>
    </StyledLanguages>
  );
};

export default Languages;
