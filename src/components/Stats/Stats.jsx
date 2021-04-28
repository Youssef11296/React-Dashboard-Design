import FilterBox from "./FilterBox";
import Showcase from "./Showcase/Showcase";
import "./Stats.css";
import TotalBox from "./TotalBox";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__boxes">
        <FilterBox />
        <TotalBox title="Total Checkouts" number="72" color="#63f4f7" />
        <TotalBox title="Total Failure" number="10" color="#fe7448" />
      </div>
      <div className="stats__showcase">
        <Showcase />
      </div>
    </div>
  );
};

export default Stats;
