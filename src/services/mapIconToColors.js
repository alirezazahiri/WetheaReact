//
import sun from "../assets/sun.jpg";
import sun_night from "../assets/sun-night.jpg";

//
import sun_cloud from "../assets/sun-cloud.jpg";
import sun_cloud_night from "../assets/sun-cloud-night.jpg";

//
import cloud from "../assets/cloud.jpg";
import cloud_night from "../assets/cloud-night.jpg";

//
import rain from "../assets/rain.jpg";
import rain_night from "../assets/rain-night.jpg";

//
import lightning from "../assets/lightning.jpg";
import lightning_night from "../assets/lightning-night.jpg";

//
import snow from "../assets/snow.jpg";
import snow_night from "../assets/snow-night.jpg";

//
import mist from "../assets/mist.jpg";
import mist_night from "../assets/mist-night.jpg";

const ICONS = {
  // DAY
  "01d": { color: "#FFA400", img: sun },
  "02d": { color: "#FEE440", img: sun_cloud },
  "03d": { color: "#CEE5D0", img: cloud },
  "04d": { color: "#0F00FF", img: rain },
  "09d": { color: "#0F00FF", img: rain },
  "10d": { color: "#0F00FF", img: rain },
  "11d": { color: "#345B63", img: lightning },
  "13d": { color: "#f9f9f9", img: snow },
  "50d": { color: "#10110F", img: mist },

  // NIGHT
  "01n": { color: "#FFA40066", img: sun_night },
  "02n": { color: "#FEE44066", img: sun_cloud_night },
  "03n": { color: "#CEE5D066", img: cloud_night },
  "04n": { color: "#0F00FF66", img: rain_night },
  "09n": { color: "#0F00FF66", img: rain_night },
  "10n": { color: "#0F00FF66", img: rain_night },
  "11n": { color: "#345B6366", img: lightning_night },
  "13n": { color: "#f9f9f966", img: snow_night },
  "50n": { color: "#10110F66", img: mist_night },
};

const invertColor = (hex) => {
  hex = hex.indexOf("#") === 0 ? hex.slice(1) : hex;

  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

const padZero = (str, len) => {
  len = len || 2;
  let zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

export const mapIconToColors = (icon) => {
  const negativeContrastColor = invertColor(ICONS[icon].color.slice(0, 7));
  return { txt: negativeContrastColor, ...ICONS[icon] };
};
