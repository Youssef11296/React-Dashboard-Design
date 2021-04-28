import { Avatar, IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const HeaderUser = () => {
  return (
    <div className="header__user">
      <div className="header__user--info">
        <Avatar
          src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
          className="header__userImg"
        />
        <div className="header__userText">
          <h5 className="header__userName">Bill Gates</h5>
          <p className="header__userMail">billgates@gmail.com</p>
        </div>
      </div>
      <IconButton>
        <ExpandMore className="header__more" />
      </IconButton>
    </div>
  );
};

export default HeaderUser;
