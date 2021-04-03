import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./styles";

const Wrapper = (props) => {
  const { children } = props;

  return <StyledWrapper>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
