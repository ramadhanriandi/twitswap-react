import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledTotalTweets = styled.div`
  .total-tweets {
    &__box {
      &__tweet,
      &__retweet,
      &__quote,
      &__reply {
        height: 12px;
        margin-right: 8px;
        width: 12px;
      }

      &__tweet {
        background: ${COLORS.RED_1};
      }

      &__retweet {
        background: ${COLORS.YELLOW_1};
      }

      &__quote {
        background: ${COLORS.GREEN_1};
      }

      &__reply {
        background: ${COLORS.GREY_1};
      }
    }

    &__count {
      color: ${COLORS.PRIMARY_1};
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    &__legend {
      display: flex;
      font-size: 10px;
      justify-content: flex-end;
    }

    &__tweet {
      background: ${COLORS.RED_1};
      width: ${(props) => (props.tweetCount / props.totalTweets) * 100}%;
    }

    &__retweet {
      background: ${COLORS.YELLOW_1};
      width: ${(props) => (props.retweetCount / props.totalTweets) * 100}%;
    }

    &__quote {
      background: ${COLORS.GREEN_1};
      width: ${(props) => (props.quoteCount / props.totalTweets) * 100}%;
    }

    &__reply {
      background: ${COLORS.GREY_1};
      width: ${(props) => (props.replyCount / props.totalTweets) * 100}%;
    }
  }
`;
