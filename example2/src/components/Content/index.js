import React from "react";
import "./index.css";

import {useTheme} from "../../store/theme";

import Button from "../Button";

export default function Content() {
  const {theme, setTheme} = useTheme();

  return (
    <div
      className="content-container"
      style={{backgroundColor: theme.color.bgSecondary}}
    >
      <div
        className="value-container"
        style={{color: theme.color.textSecondary}}
      >
        <b>{`Valor atual: ${0}`} </b>
      </div>
      <div className="btn-theme">
        <Button label="Alterar Tema" cb={setTheme} />
      </div>
    </div>
  );
}
