import React from "react";

import StreamingInformation from "~/components/commons/StreamingInformation";
import Languages from "~/components/pages/VisualizationList/Languages";
import Sentiment from "~/components/pages/VisualizationList/Sentiment";
import TotalTweets from "~/components/pages/VisualizationList/TotalTweets";
import TweetAnnotations from "~/components/pages/VisualizationList/TweetAnnotations";
import TweetDomains from "~/components/pages/VisualizationList/TweetDomains";
import TweetsPerTime from "~/components/pages/VisualizationList/TweetsPerTime";
import WordCloud from "~/components/pages/VisualizationList/WordCloud";

import { DUMMY_METADATA } from "./constants";
import { VisualizationListWrapper } from "./styles";

const VisualizationList = () => {
  return (
    <VisualizationListWrapper>
      <div className="grid grid-cols-3 gap-x-5 mb-5">
        <div className="col-span-2">
          <StreamingInformation
            id={DUMMY_METADATA.id}
            topic={DUMMY_METADATA.topic}
            startTime={DUMMY_METADATA.start_time}
            endTime={DUMMY_METADATA.end_time}
            duration={DUMMY_METADATA.duration}
            rule={DUMMY_METADATA.rule}
            fullHeight
          />
        </div>
        <TotalTweets />
      </div>

      <div className="grid grid-cols-1 mb-5">
        <TweetsPerTime />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mb-5">
        <TweetDomains />
        <TweetAnnotations />
      </div>

      <div className="grid grid-cols-4 gap-x-5 mb-5">
        <div className="col-span-2">
          <WordCloud />
        </div>
        <Sentiment />
        <Languages />
      </div>
    </VisualizationListWrapper>
  );
};

export default VisualizationList;
