import React from "react";
import PropTypes from "prop-types";

import { StyledBox } from "./styles";

const Box = (props) => {
  const { children, className } = props;

  return <StyledBox className={className}>{children}</StyledBox>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: "",
};

export default Box;
