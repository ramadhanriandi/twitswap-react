export const getNumberWithCommas = (x) => {
  const convertedNum =
    x > 99999
      ? Math.sign(x) * (Math.abs(x) / 1000).toFixed(1) + "k"
      : Math.sign(x) * Math.abs(x);

  return convertedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
