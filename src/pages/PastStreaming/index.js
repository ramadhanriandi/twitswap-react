import React from "react";

import StreamingInformation from "~/components/commons/StreamingInformation";

import { DUMMY_METADATAS } from "./constants";
import { PastStreamingWrapper } from "./styles";

const PastStreaming = () => {
  return (
    <PastStreamingWrapper>
      {DUMMY_METADATAS.map((data) => (
        <div className="mb-5" key={data.id}>
          <StreamingInformation
            id={data.id}
            topic={data.topic}
            startTime={data.start_time}
            endTime={data.end_time}
            duration={data.duration}
            rule={data.rule}
            isRedirected
          />
        </div>
      ))}
    </PastStreamingWrapper>
  );
};

export default PastStreaming;
