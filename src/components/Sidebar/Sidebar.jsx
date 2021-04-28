import BoxTop from "./BoxTop";
import DiscordBox from "./DiscordBox";
import DownloadBox from "./DownloadBox";
import "./Sidebar.css";
import TransferBox from "./TransferBox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__boxes">
        <BoxTop />
        <DiscordBox />
        <TransferBox />
        <DownloadBox />
      </div>
    </div>
  );
};

export default Sidebar;
