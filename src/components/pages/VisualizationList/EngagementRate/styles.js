import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledEngagementRate = styled.div`
  height: fit-content;

  .engagement-rate {
    &__count {
      color: ${COLORS.PRIMARY_1};
      font-size: 36px;
    }

    &__title {
      font-size: 12px;
    }
  }
`;
