import React from "react";
import TweetEmbed from "react-tweet-embed";

import VisualizationTemplate from "../VisualizationTemplate";

const PopularTweets = () => {
  return (
    <div>
      <VisualizationTemplate title="Popular Tweets">
        <div className="flex justify-between">
          <TweetEmbed id="692527862369357824" placeholder={"loading"} />
          <TweetEmbed id="692527862369357824" placeholder={"loading"} />
          <TweetEmbed id="692527862369357824" placeholder={"loading"} />
        </div>
      </VisualizationTemplate>
    </div>
  );
};

export default PopularTweets;
