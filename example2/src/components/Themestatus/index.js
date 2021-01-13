import React from "react";
import "./index.css";

import {useTheme} from "../../store/theme";

import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

export default function Themestatus() {
  const {name} = useTheme();

  return (
    <div className="theme-status">
      <img className="icon" src={name === "default" ? Sun : Moon} />
    </div>
  );
}
