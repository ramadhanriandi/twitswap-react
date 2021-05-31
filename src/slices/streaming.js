import { createSlice } from "@reduxjs/toolkit";

import { startStreamingApi, stopStreamingApi } from "~/api/streamingApi";

const initialState = {
  loading: false,
  hasErrors: false,
  topic: "",
  rule: "",
  ruleId: "",
  startDateTime: null,
};

const streamingSlice = createSlice({
  name: "streaming",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    startStreamingSuccess: (state, { payload }) => {
      state.topic = payload.topic;
      state.rule = payload.rule;
      state.ruleId = payload.ruleId;
      state.startDateTime = new Date();
      state.loading = false;
      state.hasErrors = false;
    },
    stopStreamingSuccess: (state) => {
      state.topic = "";
      state.rule = "";
      state.ruleId = "";
      state.startDateTime = null;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const {
  setLoading,
  setError,
  startStreamingSuccess,
  stopStreamingSuccess,
} = streamingSlice.actions;

export const streamingSelector = (state) => state.streaming;

export default streamingSlice.reducer;

export const startStreaming = (topic, rule) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const data = await startStreamingApi(rule);

      dispatch(
        startStreamingSuccess({
          topic,
          rule,
          ruleId: data.rule_id,
        })
      );
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const stopStreaming = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const data = await stopStreamingApi();

      if (data.success) {
        dispatch(stopStreamingSuccess());
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};
