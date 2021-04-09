import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Box from "~/components/commons/Box";
import Button from "~/components/commons/Button";

import { StyledStreamingInformation } from "./styles";

const StreamingInformation = (props) => {
  const {
    id,
    topic,
    startTime,
    endTime,
    duration,
    rule,
    fullHeight,
    isRedirected,
  } = props;

  const history = useHistory();

  const handleRedirect = (id) => (e) => {
    e.preventDefault();
    history.push(`/past/${id}`);
  };

  return (
    <StyledStreamingInformation fullHeight={fullHeight}>
      <Box className="h-full">
        <div className="flex justify-between mb-6">
          <div>
            <div className="streaming-information__title">{topic}</div>
            <div className="streaming-information__time">
              <span>Start:</span> {startTime} | <span>End:</span> {endTime} |{" "}
              <span>Duration:</span> {duration}
            </div>
          </div>

          {isRedirected ? (
            <Button color="primary" onClick={handleRedirect(id)}>
              Detail
            </Button>
          ) : null}
        </div>

        <div className="streaming-information__input">
          <label>Rule</label>
          <input
            className="streaming-information__input__rule"
            readOnly
            type="text"
            value={rule}
          />
        </div>
      </Box>
    </StyledStreamingInformation>
  );
};

StreamingInformation.propTypes = {
  id: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rule: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  isRedirected: PropTypes.bool,
};

StreamingInformation.defaultProps = {
  fullHeight: false,
  isRedirected: false,
};

export default StreamingInformation;
