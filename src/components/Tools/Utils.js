export const dateFormatter = date => {
  const newDate = new Date(date);
  return newDate.toLocaleString(undefined, {
    timeStyle: "short",
    hour12: true,
    dateStyle: "short"
  });
};
