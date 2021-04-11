import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { COLORS } from "~/constants/colors";
import { getNumberWithCommas } from "~/helpers/number";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_ENGAGEMENT_RATE_DATA } from "./constants";
import { StyledEngagementRate } from "./styles";

const EngagementRate = () => {
  return (
    <StyledEngagementRate>
      <VisualizationTemplate title="Engagement Rate">
        <ResponsiveContainer height={246} width="100%">
          <AreaChart
            data={DUMMY_ENGAGEMENT_RATE_DATA}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="engagementRate" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={COLORS.PRIMARY_1}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={COLORS.PRIMARY_1}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelFormatter={(index) => DUMMY_ENGAGEMENT_RATE_DATA[index].name}
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke={COLORS.PRIMARY_1}
              fillOpacity={1}
              fill="url(#engagementRate)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="flex justify-around mt-6">
          <div>
            <div className="engagement-rate__title">Total Likes</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(1043)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Replies</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(350)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Retweets</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(93)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Quotes</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(56)}
            </div>
          </div>
        </div>
      </VisualizationTemplate>
    </StyledEngagementRate>
  );
};

export default EngagementRate;
