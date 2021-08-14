import { streamRequest } from "./axiosConfig";

export const startStreamingApi = async (name, rule) => {
  const { data } = await streamRequest.post("/streaming/start", {
    name,
    rule,
  });

  return data;
};

export const stopStreamingApi = async (id) => {
  const { data } = await streamRequest.post("/streaming/stop", {
    id,
  });

  return data;
};

export const getLatestStreamingApi = async () => {
  const { data } = await streamRequest.get("/streaming/latest");

  return data;
};

export const getAllStreamingApi = async () => {
  const { data } = await streamRequest.get("/streaming/all");

  return data;
};

export const getStreamingByIdApi = async (id) => {
  const { data } = await streamRequest.get(`/streaming/${id}`);

  return data;
};

export const getVisualizationByRuleIdApi = async (ruleId, latestTime) => {
  const { data } = await streamRequest.get(`/rule/${ruleId}/visualization`, {
    params: {
      latest_time: latestTime,
    },
  });

  return data;
};
