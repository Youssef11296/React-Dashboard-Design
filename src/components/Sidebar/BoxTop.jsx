import { VisibilityOff } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const BoxTop = () => {
  return (
    <div className="sidebar__box sidebar__boxTop">
      <div className="sidebar__box--textTop">
        <div className="topLeft">
          <p>Licence key</p>
          <p>XXXX - XXXX - XXXX - XXXX</p>
        </div>
        <div className="topRight">
          <VisibilityOff />
        </div>
      </div>
      <div className="sidebar__box--textMid">
        <div className="sidebar__box--textMid-left">
          <p>Renew Now</p>
          <p>Stripe</p>
        </div>
        <Button className="box__button sidebar__box--textMid-right">
          Deactive
        </Button>
      </div>
      <div className="sidebar__box--textBottom">
        <p>
          Next renewal on <span>22 March 2021</span>
        </p>
      </div>
    </div>
  );
};

export default BoxTop;
