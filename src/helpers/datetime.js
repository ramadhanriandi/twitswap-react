import { MONTHS } from "~/constants/datetime";

export const formatDateTime = (dateStr) => {
  const dateTime = dateStr ? new Date(dateStr) : new Date();

  const date = dateTime.getDate();
  const monthIdx = dateTime.getMonth();
  const year = dateTime.getFullYear();

  let hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour || 12;

  const hourStr = hour < 10 ? `0${hour}` : hour;

  const minuteStr = minute < 10 ? `0${minute}` : minute;

  return `${date} ${MONTHS[monthIdx]}, ${year} at ${hourStr}:${minuteStr} ${period}`;
};
