import React from "react";
import { useSelector } from "react-redux";

import { Tooltip } from "@material-ui/core";

import Box from "~/components/commons/Box";
import { getNumberWithCommas } from "~/helpers/number";
import { streamingSelector } from "~/slices/streaming";

import { StyledTotalTweets } from "./styles";
import { getCumulativeTweetTypes } from "./utils";

const TotalTweets = () => {
  const { tweetTypes } = useSelector(streamingSelector);

  const totalTweets = getCumulativeTweetTypes(tweetTypes?.cumulative);
  const tweetCount = tweetTypes?.cumulative?.tweet ?? 0;
  const retweetCount = tweetTypes?.cumulative?.retweet ?? 0;
  const quoteCount = tweetTypes?.cumulative?.quote ?? 0;
  const replyCount = tweetTypes?.cumulative?.reply ?? 0;

  return (
    <StyledTotalTweets
      totalTweets={totalTweets}
      tweetCount={tweetCount}
      retweetCount={retweetCount}
      quoteCount={quoteCount}
      replyCount={replyCount}
    >
      <Box className="h-full">
        <div>Total Tweets</div>
        <div className="total-tweets__count">
          {getNumberWithCommas(totalTweets)}
        </div>
        <div className="flex mb-5">
          <Tooltip title={getNumberWithCommas(tweetCount)} arrow>
            <div className="total-tweets__tweet h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(retweetCount)} arrow>
            <div className="total-tweets__retweet h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(quoteCount)} arrow>
            <div className="total-tweets__quote h-2" />
          </Tooltip>
          <Tooltip title={getNumberWithCommas(replyCount)} arrow>
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
