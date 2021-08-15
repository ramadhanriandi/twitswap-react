import React from "react";
import { useSelector } from "react-redux";
import TweetEmbed from "react-tweet-embed";

import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

const PopularTweets = () => {
  const { tweetPopularities } = useSelector(streamingSelector);

  return (
    <div>
      <VisualizationTemplate title="Popular Tweets">
        <div className="flex justify-between">
          {tweetPopularities.slice(0, 3).map((tweetPopularity) => (
            <TweetEmbed
              id={tweetPopularity.tweet_id}
              key={tweetPopularity.tweet_id}
            />
          ))}
        </div>
      </VisualizationTemplate>
    </div>
  );
};

export default PopularTweets;
