export const convertTweetSources = (tweetSources) => {
  const { web = 0, iphone = 0, android = 0, other = 0 } = tweetSources;

  return [
    { name: "Web", value: web },
    { name: "iPhone", value: iphone },
    { name: "Android", value: android },
    { name: "Others", value: other },
  ];
};
