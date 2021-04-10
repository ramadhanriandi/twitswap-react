import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledWordCloud = styled.div`
  height: 420px;

  .tag-cloud {
    align-content: center;
    align-items: center;
    color: ${COLORS.PRIMARY_1};
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
    height: 100%;
    justify-content: center;

    &-tag {
      margin: 10px !important;
    }
  }
`;
