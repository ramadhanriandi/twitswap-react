export const getCumulativeTweetTypes = (tweetTypes) => {
  const { tweet = 0, reply = 0, retweet = 0, quote = 0 } = tweetTypes;

  return tweet + reply + retweet + quote;
};
