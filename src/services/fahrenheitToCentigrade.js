export const convert = (K) => {
  const C = K - 273.15;
  return `${C.toFixed(2)}\xB0C`;
};
