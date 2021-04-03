import styled from "styled-components";

import { COLORS } from "~/constants/colors";

export const StyledNavbar = styled.div`
  align-items: center;
  background: ${COLORS.PRIMARY_2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLORS.WHITE};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 114px;

  .navbar {
    &__menu {
      align-items: center;
      display: flex;

      &__item {
        color: ${COLORS.PRIMARY_5};
        cursor: pointer;
        display: flex;
        font-size: 16px;
        margin-left: 64px;

        &:hover {
          color: ${COLORS.WHITE};
        }

        .MuiSvgIcon-root {
          margin-right: 12px;
        }
      }

      .active {
        color: ${COLORS.WHITE};
        font-weight: 600;
      }
    }

    &__time {
      align-items: center;
      border-right: 1px solid ${COLORS.WHITE};
      color: ${COLORS.PRIMARY_2};
      display: flex;
      margin-right: 24px;
      padding-right: 24px;

      .MuiButtonBase-root {
        margin-left: 12px;
      }

      .react-datepicker__input-container {
        input {
          border-radius: 5px;
          font-weight: 600;
          height: 42px;
          padding: 0 12px;
          width: 200px;
        }
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;
