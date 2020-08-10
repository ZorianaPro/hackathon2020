import React from "react";
import LocationSymbol from "../LocationSymbol";
import DateSymbol from "../DateSymbol";
import AddPersonSymbol from "../AddPersonSymbol";

import "./SVGSpriteSheet.css";
import LightningSymbol from "../LightningSymbol";

export const defaults = {
  className: "SVGSpriteSheet",
  id: "SVGSpriteSheet",
};

const SVGSpriteSheet = (props) => (
  <svg
    id={props.id || defaults.id}
    className={props.className || defaults.className}
  >
    <LocationSymbol />
    <DateSymbol />
    <AddPersonSymbol />
    <LightningSymbol />
  </svg>
);

export default SVGSpriteSheet;
