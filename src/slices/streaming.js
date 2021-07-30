import { createSlice } from "@reduxjs/toolkit";

import { startStreamingApi, stopStreamingApi } from "~/api/streamingApi";

const initialState = {
  loading: false,
  errorMsg: "",
  currentStreaming: {},

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
    setError: (state, { payload }) => {
      state.loading = false;
      state.errorMsg = payload;
    },
    startStreamingSuccess: (state, { payload }) => {
      state.currentStreaming = payload;
      state.loading = false;
      state.errorMsg = "";
    },
    stopStreamingSuccess: (state) => {
      state.topic = "";
      state.rule = "";
      state.ruleId = "";
      state.startDateTime = null;
      state.loading = false;
      state.errorMsg = "";
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

export const startStreaming = (topicName, topicRule) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const data = await startStreamingApi(topicName, topicRule);

      const { id, name, rule_id, rule, start_time } = data;

      dispatch(
        startStreamingSuccess({
          id,
          name,
          ruleId: rule_id,
          rule,
          startTime: Date(start_time),
        })
      );
    } catch (error) {
      dispatch(setError("Failed to start streaming"));
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
      dispatch(setError("Failed to stop streaming"));
    }
  };
};
