import React from "react";
import PropTypes from "prop-types";

import Box from "~/components/commons/Box";

const VisualizationTemplate = (props) => {
  const { children, title } = props;

  return (
    <Box className="h-full">
      <div className="font-semibold mb-5 text-lg">{title}</div>
      {children}
    </Box>
  );
};

VisualizationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default VisualizationTemplate;
