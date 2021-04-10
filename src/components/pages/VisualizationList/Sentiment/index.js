import React from "react";
import {
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_SENTIMENT_DATA, SENTIMENT_COLORS } from "./constants";
import { StyledSentiment } from "./styles";

const Sentiment = () => {
  return (
    <StyledSentiment>
      <VisualizationTemplate title="Sentiment">
        <ResponsiveContainer height={308} width="100%">
          <PieChart>
            <Pie
              data={DUMMY_SENTIMENT_DATA}
              innerRadius={80}
              paddingAngle={1}
              dataKey="value"
            >
              {DUMMY_SENTIMENT_DATA.map((entry) => (
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
    </StyledSentiment>
  );
};

export default Sentiment;
