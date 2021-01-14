import React from "react";
import "./index.css";

import { useTheme } from "../../store/theme";
import { useNumber } from "../../store/number";

import Themestatus from "../Themestatus";
import Button from "../Button";

export default function Sidebar() {
  const { theme } = useTheme();
  const { increment, decrement } = useNumber();

  return (
    <div
      className="side-container"
      style={{ backgroundColor: theme.color.bgPrimary, color: "#fff" }}
    >
      <div className="button-container">
        <Themestatus />
        <Button side label="Incrementar" cb={increment} />
        <Button side label="Decrementar" cb={decrement} />
      </div>
    </div>
  );
}
