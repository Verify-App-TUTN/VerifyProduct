import React from "react";
const Success = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    xmlSpace="preserve"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle style={{fill: "#25AE88"}} cx="25" cy="25" r="25" />
    <polyline
      style={{
        fill: "none",
        stroke: "#FFFFFF",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke- miterlimit": 10,
      }}
      points="
	38,15 22,33 12,25 "
    />
  </svg>
);

export default Success;
