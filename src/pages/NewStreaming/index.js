import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "~/components/commons/Box";
import Button from "~/components/commons/Button";
import { startStreaming } from "~/slices/streaming";

import { MAX_RULE_LENGTH } from "./constants";
import { NewStreamingWrapper } from "./styles";

const NewStreaming = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [rule, setRule] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeRule = (e) => {
    setRule(e.target.value);
  };

  const handleSubmitTopic = (e) => {
    e.preventDefault();

    dispatch(startStreaming(name, rule));
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
          {rule.length} / 512 characters
        </div>

        <div className="new-streaming__note">
          Don’t know how to build a rule? Refer to this{" "}
          <a
            href="https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule"
            target="_blank"
            rel="noreferrer"
          >
            documentation
          </a>
        </div>

        <div className="flex justify-end">
          <Button
            color="primary"
            disabled={!name || !rule || (rule && rule.length > MAX_RULE_LENGTH)}
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
