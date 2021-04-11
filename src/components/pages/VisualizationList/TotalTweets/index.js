import React from "react";

import { Tooltip } from "@material-ui/core";

import Box from "~/components/commons/Box";
import { getNumberWithCommas } from "~/helpers/number";

import { StyledTotalTweets } from "./styles";

const TotalTweets = () => {
  return (
    <StyledTotalTweets>
      <Box className="h-full">
        <div>Total Tweets</div>
        <div className="total-tweets__count">{getNumberWithCommas(1023)}</div>
        <div className="flex mb-5">
          <Tooltip title={getNumberWithCommas(500)} arrow>
            <div className="total-tweets__tweet h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(250)} arrow>
            <div className="total-tweets__retweet h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(200)} arrow>
            <div className="total-tweets__quote h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(73)} arrow>
            <div className="total-tweets__reply h-2" />
          </Tooltip>
        </div>
        <div className="total-tweets__legend">
          <div className="flex items-center">
            <div className="total-tweets__box__tweet" /> Tweet
          </div>
          <div className="flex items-center">
            <div className="total-tweets__box__retweet ml-6" /> Retweet
          </div>
          <div className="flex items-center">
            <div className="total-tweets__box__quote ml-6" /> Quote
          </div>
          <div className="flex items-center">
            <div className="total-tweets__box__reply ml-6" /> Reply
          </div>
        </div>
      </Box>
    </StyledTotalTweets>
  );
};

export default TotalTweets;
