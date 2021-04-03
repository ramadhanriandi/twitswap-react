import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const NewStreamingWrapper = styled.div`
  .new-streaming {
    &__input {
      align-items: center;
      display: flex;

      input {
        border: 1px solid ${COLORS.GREY_2};
        box-sizing: border-box;
        border-radius: 5px;
        height: 42px;
        flex: 1 1 0%;
        font-size: 12px;
        padding: 0 16px;

        &:focus {
          outline: none;
        }
      }

      label {
        flex: 0 1 auto;
        width: 110px;
      }

      &__count {
        display: flex;
        font-size: 12px;
        justify-content: flex-end;
        margin-bottom: 20px;
      }

      &__rule {
        color: ${COLORS.RED_1};
        font-family: "Courier Prime", monospace;
      }
    }

    &__note {
      font-size: 12px;
      margin-bottom: 20px;

      a {
        color: ${COLORS.YELLOW_1};
        font-weight: 700;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 32px;
    }
  }
`;
