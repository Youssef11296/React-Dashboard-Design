import { Button } from "@material-ui/core";

const DownloadBox = () => {
  return (
    <div className="sidebar__box">
      <div className="sidebar__box sidebar__downloadBox">
        <div className="sidebar__downloadBox--left">
          <div className="sidebar__downloadBox--title">Desktop App</div>
        </div>
        <div className="sidebar__downloadBox--btns">
          <Button className="box__button sidebar__downloadBox--btn">
            Download for Mac
          </Button>
          <Button className="box__button sidebar__downloadBox--btn">
            Download for Windows
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadBox;
