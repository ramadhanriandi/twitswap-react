import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledStreamingInformation = styled.div`
  .streaming-information {
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

      &__rule {
        color: ${COLORS.RED_1};
        font-family: "Courier Prime", monospace;
      }
    }

    &__time {
      font-size: 12px;

      span {
        font-weight: 600;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 16px;
    }
  }
`;
