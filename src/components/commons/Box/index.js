import React from "react";
import PropTypes from "prop-types";

import { StyledBox } from "./styles";

const Box = (props) => {
  const { children } = props;

  return <StyledBox>{children}</StyledBox>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
