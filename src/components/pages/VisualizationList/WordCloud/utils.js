import { RANDOM_SEED } from "./constants";

export const convertTweetWords = (tweetWords) => {
  return tweetWords.map((tweetWord) => {
    const { name, count } = tweetWord;

    return {
      value: name,
      count,
    };
  });
};

export const getRandomNumber = () => {
  let seed = RANDOM_SEED;
  const x = Math.sin(seed++) * 10000;

  return x - Math.floor(x);
};
