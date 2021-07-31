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
