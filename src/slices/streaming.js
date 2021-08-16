import { createSlice } from "@reduxjs/toolkit";

import {
  startStreamingApi,
  stopStreamingApi,
  getLatestStreamingApi,
  getAllStreamingApi,
  getStreamingByIdApi,
  getVisualizationByRuleIdApi,
} from "~/api/streamingApi";

const TWEET_LANGUAGES_INITIAL_STATE = {
  en: 0,
  in: 0,
  other: 0,
};
const TWEET_METRICS_INITIAL_STATE = {
  cumulative: {
    like: 0,
    reply: 0,
    retweet: 0,
    quote: 0,
  },
  interval: [],
};
const TWEET_SOURCES_INITIAL_STATE = {
  web: 0,
  iphone: 0,
  android: 0,
  other: 0,
};
const TWEET_TYPES_INITIAL_STATE = {
  cumulative: {
    tweet: 0,
    retweet: 0,
    quote: 0,
    reply: 0,
  },
  interval: [],
};

const initialState = {
  loading: false,
  errorMsg: "",
  currentStreaming: {},
  allStreaming: [],
  tweetAnnotations: [],
  tweetDomains: [],
  tweetGeolocations: [],
  tweetHashtags: [],
  tweetLanguages: TWEET_LANGUAGES_INITIAL_STATE,
  tweetMetrics: TWEET_METRICS_INITIAL_STATE,
  tweetPopularities: [],
  tweetSources: TWEET_SOURCES_INITIAL_STATE,
  tweetTypes: TWEET_TYPES_INITIAL_STATE,
  tweetWords: [],
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
      state.allStreaming = [];
      state.tweetAnnotations = [];
      state.tweetDomains = [];
      state.tweetGeolocations = [];
      state.tweetHashtags = [];
      state.tweetLanguages = TWEET_LANGUAGES_INITIAL_STATE;
      state.tweetMetrics = TWEET_METRICS_INITIAL_STATE;
      state.tweetPopularities = [];
      state.tweetSources = TWEET_SOURCES_INITIAL_STATE;
      state.tweetTypes = TWEET_TYPES_INITIAL_STATE;
      state.tweetWords = [];
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
      state.allStreaming = [];
      state.tweetAnnotations = [];
      state.tweetDomains = [];
      state.tweetGeolocations = [];
      state.tweetHashtags = [];
      state.tweetLanguages = TWEET_LANGUAGES_INITIAL_STATE;
      state.tweetMetrics = TWEET_METRICS_INITIAL_STATE;
      state.tweetPopularities = [];
      state.tweetSources = TWEET_SOURCES_INITIAL_STATE;
      state.tweetTypes = TWEET_TYPES_INITIAL_STATE;
      state.tweetWords = [];
      state.loading = false;
      state.errorMsg = "";
    },
    getVisualizationByRuleIdSuccess: (state, { payload }) => {
      const {
        tweetAnnotations,
        tweetDomains,
        tweetGeolocations,
        tweetHashtags,
        tweetLanguages,
        tweetMetrics,
        tweetPopularities,
        tweetSources,
        tweetTypes,
        tweetWords,
      } = payload;

      state.tweetAnnotations = tweetAnnotations;
      state.tweetDomains = tweetDomains;
      state.tweetGeolocations = tweetGeolocations;
      state.tweetHashtags = tweetHashtags;
      state.tweetLanguages = tweetLanguages;
      state.tweetMetrics = tweetMetrics;
      state.tweetPopularities = tweetPopularities;
      state.tweetSources = tweetSources;
      state.tweetTypes = tweetTypes;
      state.tweetWords = tweetWords;
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
  getVisualizationByRuleIdSuccess,
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

export const getVisualizationByRuleId = (ruleId, latestTime) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await getVisualizationByRuleIdApi(ruleId, latestTime);

      const {
        tweet_annotations,
        tweet_domains,
        tweet_geolocations,
        tweet_hashtags,
        tweet_languages,
        tweet_metrics,
        tweet_popularities,
        tweet_sources,
        tweet_types,
        tweet_words,
      } = response.data;

      tweet_metrics?.interval?.reverse();
      tweet_types?.interval?.reverse();

      dispatch(
        getVisualizationByRuleIdSuccess({
          tweetAnnotations: tweet_annotations ?? [],
          tweetDomains: tweet_domains ?? [],
          tweetGeolocations: tweet_geolocations ?? [],
          tweetHashtags: tweet_hashtags ?? [],
          tweetLanguages: tweet_languages,
          tweetMetrics: tweet_metrics,
          tweetPopularities: tweet_popularities ?? [],
          tweetSources: tweet_sources,
          tweetTypes: tweet_types,
          tweetWords: tweet_words ?? [],
        })
      );
    } catch (error) {
      dispatch(setError("Failed to get visualization by rule id"));
    }
  };
};
