import { formatTime } from "~/helpers/datetime";

export const convertIntervalTweetMetrics = (tweetMetrics) => {
  return tweetMetrics
    ? tweetMetrics.map((tweetMetric) => {
        const {
          like = 0,
          reply = 0,
          retweet = 0,
          quote = 0,
          created_at = "",
        } = tweetMetric;

        return {
          name: formatTime(created_at),
          total: like + reply + retweet + quote,
        };
      })
    : [];
};
