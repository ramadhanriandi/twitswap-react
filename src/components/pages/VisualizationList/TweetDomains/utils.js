export const convertTweetDomains = (tweetDomains) => {
  const convertedTweetDomains = {
    name: "tweet_domains",
    children: [],
  };

  tweetDomains.forEach((tweetDomain) => {
    const { name, count } = tweetDomain;

    convertedTweetDomains.children.push({
      name,
      tweets: count,
    });
  });

  return [convertedTweetDomains];
};
