export const convertTweetAnnotations = (tweetAnnotations) => {
  const convertedTweetAnnotations = {
    name: "root",
    children: tweetAnnotations,
  };

  return convertedTweetAnnotations;
};
