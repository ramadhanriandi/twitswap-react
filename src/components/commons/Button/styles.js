import styled from "styled-components";

import { Button } from "@material-ui/core";

import { COLORS } from "~/constants/colors";

export const StyledButton = styled(Button)`
  && {
    align-items: center;
    ${(props) =>
      props.color === "default" ? `background: ${COLORS.WHITE};` : ""};
    border-radius: 5px;
    ${(props) =>
      props.color === "default" ? `color: ${COLORS.PRIMARY_2};` : ""};
    display: flex;
    font-weight: 600;
    height: 42px;
    min-width: 80px;
    justify-content: center;
    text-transform: none;
  }
`;
