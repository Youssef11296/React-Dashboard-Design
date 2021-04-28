import "./Header.css";
import HeaderNotifications from "./HeaderNotifications";
import HeaderUser from "./HeaderUser";

const Header = () => {
  return (
    <div className="header">
      <HeaderNotifications />
      <HeaderUser />
    </div>
  );
};

export default Header;
