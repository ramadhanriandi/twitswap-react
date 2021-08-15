import { COLORS } from "~/constants/colors";

export const convertTweetLanguages = (tweetLanguages) => {
  const enCount = tweetLanguages?.en ?? 0;
  const inCount = tweetLanguages?.in ?? 0;
  const otherCount = tweetLanguages?.other ?? 0;

  return [
    {
      id: "English",
      label: "English",
      value: enCount,
      color: COLORS.PRIMARY_1,
    },
    {
      id: "Indonesia",
      label: "Indonesia",
      value: inCount,
      color: COLORS.YELLOW_1,
    },
    {
      id: "Other",
      label: "Other",
      value: otherCount,
      color: COLORS.GREY_1,
    },
  ];
};

export const getTotalData = (items) => {
  let total = 0;

  items.forEach((data) => {
    total += data.value;
  });

  return total;
};
