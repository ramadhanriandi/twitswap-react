import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import Box from "~/components/commons/Box";
import Button from "~/components/commons/Button";
import {
  startStreaming,
  getLatestStreaming,
  streamingSelector,
} from "~/slices/streaming";

import { MAX_RULE_LENGTH, TWITTER_RULE_LINK } from "./constants";
import { NewStreamingWrapper } from "./styles";

const NewStreaming = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { currentStreaming, loading } = useSelector(streamingSelector);

  const [name, setName] = useState("");
  const [rule, setRule] = useState("");

  useEffect(() => {
    dispatch(getLatestStreaming());
  }, []);

  useEffect(() => {
    // if the streaming is running
    if (currentStreaming.id && !currentStreaming.endTime) {
      history.push("/streaming");
    }
  }, [currentStreaming]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeRule = (e) => {
    setRule(e.target.value);
  };

  const handleSubmitTopic = async (e) => {
    e.preventDefault();

    await dispatch(startStreaming(name, rule));
  };

  return (
    <NewStreamingWrapper>
      <Box>
        <div className="new-streaming__title">Define Topic</div>

        <div className="new-streaming__input mb-5">
          <label>Name</label>
          <input onChange={handleChangeName} type="text" value={name} />
        </div>
        <div className="new-streaming__input mb-3">
          <label>Rule</label>
          <input
            className="new-streaming__input__rule"
            onChange={handleChangeRule}
            type="text"
            value={rule}
          />
        </div>
        <div className="new-streaming__input__count">
          {rule.length} / {MAX_RULE_LENGTH} characters
        </div>

        <div className="new-streaming__note">
          Don’t know how to build a rule? Refer to this{" "}
          <a href={TWITTER_RULE_LINK} target="_blank" rel="noreferrer">
            documentation
          </a>
        </div>

        <div className="flex justify-end">
          {loading && (
            <CircularProgress className="mr-4 p-2" color="secondary" />
          )}
          <Button
            color="primary"
            disabled={
              loading ||
              !name ||
              !rule ||
              (rule && rule.length > MAX_RULE_LENGTH)
            }
            onClick={handleSubmitTopic}
          >
            Start
          </Button>
        </div>
      </Box>
    </NewStreamingWrapper>
  );
};

export default NewStreaming;
