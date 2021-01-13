import React from "react";
import "./index.css";

import {useTheme} from "../../store/theme";

export default function Button({side, label, cb}) {
  const {theme} = useTheme();

  return (
    <button
      className="button"
      onClick={cb}
      style={{
        backgroundColor: side ? theme.color.btnColor : theme.color.bgPrimary,
        color: "#fff",
      }}
    >
      {label || "Botão"}
    </button>
  );
}
