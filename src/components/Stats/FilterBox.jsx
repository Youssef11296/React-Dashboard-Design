import React from "react";

const FilterBox = () => {
  return (
    <div className="box filterBox">
      <h5>Filter by:</h5>
      <div className="box__categories">
        <div className="box__category">1D</div>
        <div className="box__category">1M</div>
        <div className="box__category">1Y</div>
      </div>
    </div>
  );
};

export default FilterBox;
