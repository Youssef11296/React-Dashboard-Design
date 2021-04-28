import { UnfoldMore } from "@material-ui/icons";
import React from "react";

const ShowcaseHeader = () => {
  return (
    <div className="showcase__header">
      <div className="showcase__headerCol">
        <h3>Date</h3>
        <UnfoldMore />
      </div>
      <div className="showcase__headerCol">
        <h3>Product</h3>
      </div>
      <div className="showcase__headerCol">
        <h3>Size(US)</h3>
      </div>
      <div className="showcase__headerCol">
        <h3>Website</h3>
      </div>
      <div className="showcase__headerCol">
        <h3>Price</h3>
      </div>
      <div className="showcase__headerCol">
        <h3>Status</h3>
      </div>
    </div>
  );
};

export default ShowcaseHeader;
