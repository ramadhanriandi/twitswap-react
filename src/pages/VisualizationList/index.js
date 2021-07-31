import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import StreamingInformation from "~/components/commons/StreamingInformation";
import EngagementRate from "~/components/pages/VisualizationList/EngagementRate";
import Languages from "~/components/pages/VisualizationList/Languages";
import PopularTweets from "~/components/pages/VisualizationList/PopularTweets";
import Sentiment from "~/components/pages/VisualizationList/Sentiment";
import TopHashtags from "~/components/pages/VisualizationList/TopHashtags";
import TotalTweets from "~/components/pages/VisualizationList/TotalTweets";
import TweetAnnotations from "~/components/pages/VisualizationList/TweetAnnotations";
import TweetDomains from "~/components/pages/VisualizationList/TweetDomains";
import TweetGeolocations from "~/components/pages/VisualizationList/TweetGeolocations";
import TweetsPerTime from "~/components/pages/VisualizationList/TweetsPerTime";
import WordCloud from "~/components/pages/VisualizationList/WordCloud";
import { getLatestStreaming, streamingSelector } from "~/slices/streaming";

import { VisualizationListWrapper } from "./styles";

const VisualizationList = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { currentStreaming } = useSelector(streamingSelector);

  useEffect(() => {
    // if missing current streaming data
    if (!currentStreaming.id) {
      dispatch(getLatestStreaming());
    } else {
      // if streaming has done
      if (currentStreaming.endTime) {
        history.push("/past");
      }
    }
  }, [currentStreaming]);

  return (
    <VisualizationListWrapper>
      <div className="grid grid-cols-3 gap-x-5 mb-5">
        <div className="col-span-2">
          <StreamingInformation streaming={currentStreaming} fullHeight />
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

      <div className="grid grid-cols-2 gap-x-5 mb-5">
        <TweetGeolocations />
        <TopHashtags />
      </div>

      <div className="grid grid-cols-2 gap-x-5">
        <EngagementRate />
        <PopularTweets />
      </div>
    </VisualizationListWrapper>
  );
};

export default VisualizationList;
