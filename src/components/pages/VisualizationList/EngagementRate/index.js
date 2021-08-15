import React from "react";
import { useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { COLORS } from "~/constants/colors";
import { getNumberWithCommas } from "~/helpers/number";
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { StyledEngagementRate } from "./styles";
import { convertIntervalTweetMetrics } from "./utils";

const EngagementRate = () => {
  const { tweetMetrics } = useSelector(streamingSelector);

  const data = convertIntervalTweetMetrics(tweetMetrics?.interval);

  return (
    <StyledEngagementRate>
      <VisualizationTemplate title="Engagement Rate">
        <ResponsiveContainer height={246} width="100%">
          <AreaChart
            data={data}
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
            <Tooltip labelFormatter={(index) => data[index]?.name} />
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
              {getNumberWithCommas(tweetMetrics?.cumulative?.like ?? 0)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Replies</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(tweetMetrics?.cumulative?.reply ?? 0)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Retweets</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(tweetMetrics?.cumulative?.retweet ?? 0)}
            </div>
          </div>
          <div>
            <div className="engagement-rate__title">Total Quotes</div>
            <div className="engagement-rate__count">
              {getNumberWithCommas(tweetMetrics?.cumulative?.quote ?? 0)}
            </div>
          </div>
        </div>
      </VisualizationTemplate>
    </StyledEngagementRate>
  );
};

export default EngagementRate;
