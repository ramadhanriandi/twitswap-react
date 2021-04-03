export const DUMMY_METADATAS = [
  {
    id: "1",
    topic: "Twitter API v2 Streaming",
    start_time: "21 March, 2021 at 04.00 PM",
    end_time: "21 March, 2021 at 05.30 PM",
    duration: "1 hour 30 minutes",
    rule:
      "#twitterapiv2 “twitter data” has:mentions (has:links OR is:retweet) -is:retweet lang:en",
  },
  {
    id: "2",
    topic: "West Java Election",
    start_time: "19 March, 2021 at 03.00 PM",
    end_time: "19 March, 2021 at 05.30 PM",
    duration: "2 hours 30 minutes",
    rule: "(#pilkada OR #jabarjuara) lang:in",
  },
];
