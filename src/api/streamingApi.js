import { streamRequest } from "./axiosConfig";

export const startStreamingApi = async (rule) => {
  const { data } = await streamRequest.post("/streaming/start", { rule });

  return data;
};

export const stopStreamingApi = async () => {
  const { data } = await streamRequest.post("/streaming/stop");

  return data;
};
