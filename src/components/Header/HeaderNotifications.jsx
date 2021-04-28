import { IconButton } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

const HeaderNotifications = () => {
  return (
    <div className="header__notification">
      <IconButton>
        <Notifications />
      </IconButton>
    </div>
  );
};

export default HeaderNotifications;
