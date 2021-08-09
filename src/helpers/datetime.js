import { MONTHS } from "~/constants/datetime";

export const formatDateTime = (dateStr) => {
  const dateTime = dateStr ? new Date(dateStr) : new Date();

  const date = dateTime.getUTCDate();
  const monthIdx = dateTime.getUTCMonth();
  const year = dateTime.getUTCFullYear();

  let hour = dateTime.getUTCHours();
  const minute = dateTime.getUTCMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour || 12;

  const hourStr = hour < 10 ? `0${hour}` : hour;

  const minuteStr = minute < 10 ? `0${minute}` : minute;

  return `${date} ${MONTHS[monthIdx]}, ${year} at ${hourStr}:${minuteStr} ${period}`;
};

export const getDuration = (startTimeStr, endTimeStr) => {
  if (!startTimeStr || !endTimeStr) {
    return null;
  }

  const startTime = new Date(startTimeStr);
  const endTime = new Date(endTimeStr);

  const diff = endTime - startTime;
  const diffHours = Math.floor((diff % 86400000) / 3600000);
  const diffMinutes = Math.round(((diff % 86400000) % 3600000) / 60000);

  return `${diffHours} hour${diffHours > 1 ? "s" : ""} ${diffMinutes} minute${
    diffMinutes > 1 ? "s" : ""
  }`;
};
