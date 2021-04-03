import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const Button = (props) => {
  const { children, color, variant, ...otherProps } = props;

  return (
    <StyledButton
      color={color}
      variant={variant}
      disableElevation
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  color: "default",
  variant: "contained",
};

export default Button;
