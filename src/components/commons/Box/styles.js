import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledBox = styled.div`
  background: ${COLORS.WHITE};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  color: ${COLORS.BLACK};
  display: flex;
  flex-direction: column;
  padding: 32px;
  text-align: left;
  width: 100%;
`;
