import { ShoppingCart } from "@material-ui/icons";
import React from "react";

const TotalBox = ({ title, number, color }) => {
  return (
    <div className="box totalBox">
      <div className="totalBox__left">
        <div className="totalBox__title">
          <h5>{title}</h5>
        </div>
        <div className="totalBox__numbers">
          <h4 style={{ color }}>
            {number} <span>/82</span>
          </h4>
        </div>
      </div>
      <div
        className="totalBox__right"
        style={{
          backgroundColor:
            color === "#fe7448"
              ? "rgba(254, 116, 72, .2)"
              : "rgba(99, 244, 247, .2)",
        }}
      >
        <ShoppingCart className="totalBox__cart" style={{ color }} />
      </div>
    </div>
  );
};

export default TotalBox;
