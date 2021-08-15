export const convertTweetDomains = (tweetDomains) => {
  const convertedTweetDomains = {
    name: "tweet_domains",
    children: tweetDomains,
  };

  return [convertedTweetDomains];
};
