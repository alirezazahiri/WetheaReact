const ICONS = {
  // DAY
  "01d": "#69DADB",
  "02d": "#D1E8E4",
  "03d": "#CEE5D0",
  "04d": "#8CA1A5",
  "09d": "#889EAF",
  "10d": "#D7E9F7",
  "11d": "#345B63",
  "13d": "#D4ECDD",
  "50d": "#F1F7E7",

  // NIGHT
  "01n": "#69DADB66",
  "02n": "#D1E8E466",
  "03n": "#CEE5D066",
  "04n": "#8CA1A566",
  "09n": "#889EAF66",
  "10n": "#D7E9F766",
  "11n": "#345B6366",
  "13n": "#D4ECDD66",
  "50n": "#F1F7E766",
};

export const mapIconToBg = (icon) => {
  return ICONS[icon];
};
