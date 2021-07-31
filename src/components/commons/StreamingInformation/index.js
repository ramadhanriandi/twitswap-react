import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Box from "~/components/commons/Box";
import Button from "~/components/commons/Button";
import { formatDateTime, getDuration } from "~/helpers/datetime";

import { StyledStreamingInformation } from "./styles";

const StreamingInformation = (props) => {
  const { streaming, fullHeight, isRedirected } = props;

  const history = useHistory();

  const handleRedirect = (id) => (e) => {
    e.preventDefault();
    history.push(`/past/${id}`);
  };

  const startTime = useMemo(() => formatDateTime(streaming.startTime), [
    streaming,
  ]);
  const endTime = useMemo(() => formatDateTime(streaming.endTime), [streaming]);
  const duration = useMemo(
    () => getDuration(streaming.startTime, streaming.endTime),
    [streaming]
  );

  return (
    <StyledStreamingInformation fullHeight={fullHeight}>
      <Box className="h-full">
        <div className="flex justify-between mb-6">
          <div>
            <div className="streaming-information__title">{streaming.name}</div>
            <div className="streaming-information__time">
              <span>Start:</span> {startTime}
              {streaming.endTime && (
                <>
                  {" "}
                  | <span>End:</span> {endTime} | <span>Duration:</span>{" "}
                  {duration}
                </>
              )}
            </div>
          </div>

          {isRedirected ? (
            <Button color="primary" onClick={handleRedirect(streaming.id)}>
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
            value={streaming.rule}
          />
        </div>
      </Box>
    </StyledStreamingInformation>
  );
};

StreamingInformation.propTypes = {
  streaming: PropTypes.object.isRequired,
  fullHeight: PropTypes.bool,
  isRedirected: PropTypes.bool,
};

StreamingInformation.defaultProps = {
  fullHeight: false,
  isRedirected: false,
};

export default memo(StreamingInformation);
