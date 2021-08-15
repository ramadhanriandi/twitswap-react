import { formatTime } from "~/helpers/datetime";

export const convertIntervalTweetTypes = (tweetTypes) => {
  return tweetTypes
    ? tweetTypes.map((tweetType) => {
        const {
          tweet = 0,
          reply = 0,
          retweet = 0,
          quote = 0,
          created_at = "",
        } = tweetType;

        return {
          name: formatTime(created_at),
          tweets: tweet + reply + retweet + quote,
        };
      })
    : [];
};
