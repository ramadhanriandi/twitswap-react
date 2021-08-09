import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StreamingInformation from "~/components/commons/StreamingInformation";
import { getAllStreaming, streamingSelector } from "~/slices/streaming";

import { PastStreamingWrapper } from "./styles";

const PastStreaming = () => {
  const dispatch = useDispatch();

  const { allStreaming } = useSelector(streamingSelector);

  useEffect(() => {
    dispatch(getAllStreaming());
  }, []);

  return (
    <PastStreamingWrapper>
      {allStreaming.length ? (
        allStreaming.map((streaming) => (
          <div className="mb-5" key={streaming.id}>
            <StreamingInformation streaming={streaming} isRedirected />
          </div>
        ))
      ) : (
        <>No past streaming found</>
      )}
    </PastStreamingWrapper>
  );
};

export default PastStreaming;
