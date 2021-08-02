import { createSlice } from "@reduxjs/toolkit";

import {
  startStreamingApi,
  stopStreamingApi,
  getLatestStreamingApi,
  getAllStreamingApi,
  getStreamingByIdApi,
} from "~/api/streamingApi";

const initialState = {
  loading: false,
  errorMsg: "",
  currentStreaming: {},
  allStreaming: [],
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
      state.currentStreaming = {
        ...state.currentStreaming,
        endTime: new Date(),
      };
      state.loading = false;
      state.errorMsg = "";
    },
    getLatestStreamingSuccess: (state, { payload }) => {
      state.currentStreaming = payload;
      state.loading = false;
      state.errorMsg = "";
    },
    getAllStreamingSuccess: (state, { payload }) => {
      state.allStreaming = payload;
      state.loading = false;
      state.errorMsg = "";
    },
    getStreamingByIdSuccess: (state, { payload }) => {
      state.currentStreaming = payload;
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
  getLatestStreamingSuccess,
  getAllStreamingSuccess,
  getStreamingByIdSuccess,
} = streamingSlice.actions;

export const streamingSelector = (state) => state.streaming;

export default streamingSlice.reducer;

export const startStreaming = (topicName, topicRule) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await startStreamingApi(topicName, topicRule);

      const { id, name, rule_id, rule, start_time } = response.data;

      dispatch(
        startStreamingSuccess({
          id,
          name,
          ruleId: rule_id,
          rule,
          startTime: new Date(start_time),
        })
      );
    } catch (error) {
      dispatch(setError("Failed to start streaming"));
    }
  };
};

export const stopStreaming = (streamingId) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await stopStreamingApi(streamingId);

      if (response.success) {
        dispatch(stopStreamingSuccess());
      }
    } catch (error) {
      dispatch(setError("Failed to stop streaming"));
    }
  };
};

export const getLatestStreaming = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await getLatestStreamingApi();

      const { id, name, start_time, end_time, rule_id, rule } = response.data;

      dispatch(
        getLatestStreamingSuccess({
          id,
          name,
          ruleId: rule_id,
          rule,
          startTime: new Date(start_time),
          endTime: end_time.Valid ? new Date(end_time.Time) : null,
        })
      );
    } catch (error) {
      dispatch(setError("Failed to get latest streaming"));
    }
  };
};

export const getAllStreaming = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await getAllStreamingApi();

      const allStreaming = [];

      response.data.forEach((data) => {
        const { id, name, start_time, end_time, rule_id, rule } = data;

        allStreaming.push({
          id,
          name,
          ruleId: rule_id,
          rule,
          startTime: new Date(start_time),
          endTime: end_time.Valid ? new Date(end_time.Time) : null,
        });
      });

      dispatch(getAllStreamingSuccess(allStreaming));
    } catch (error) {
      dispatch(setError("Failed to get all streaming"));
    }
  };
};

export const getStreamingById = (streamingId) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await getStreamingByIdApi(streamingId);

      const { id, name, start_time, end_time, rule_id, rule } = response.data;

      dispatch(
        getStreamingByIdSuccess({
          id,
          name,
          ruleId: rule_id,
          rule,
          startTime: new Date(start_time),
          endTime: end_time.Valid ? new Date(end_time.Time) : null,
        })
      );
    } catch (error) {
      dispatch(setError("Failed to get streaming by id"));
    }
  };
};
