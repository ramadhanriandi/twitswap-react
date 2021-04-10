export const getTotalData = (items) => {
  let total = 0;

  items.forEach((data) => {
    total += data.value;
  });

  return total;
};
