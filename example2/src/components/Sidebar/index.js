import React from "react";
import "./index.css";

import {useTheme} from "../../store/theme";

import Themestatus from "../Themestatus";
import Button from "../Button";

export default function Sidebar() {
  const {theme} = useTheme();

  return (
    <div
      className="side-container"
      style={{backgroundColor: theme.color.bgPrimary, color: "#fff"}}
    >
      <div className="button-container">
        <Themestatus />
        <Button side label="Incrementar" />
        <Button side label="Decrementar" />
      </div>
    </div>
  );
}
