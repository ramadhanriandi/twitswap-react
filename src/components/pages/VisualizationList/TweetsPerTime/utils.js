import { formatTime } from "~/helpers/datetime";

export const convertIntervalTweetTypes = (tweetTypes) => {
  return tweetTypes.map((tweetType) => {
    const { tweet, reply, retweet, quote, created_at } = tweetType;

    return {
      name: formatTime(created_at),
      tweets: tweet + reply + retweet + quote,
    };
  });
};
