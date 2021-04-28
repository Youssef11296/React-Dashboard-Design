import { Button } from "@material-ui/core";

const DiscordBox = () => {
  return (
    <div className="sidebar__box sidebar__discordBox">
      <div className="sidebar__discordBox--left">
        <div className="sidebar__discordBox--title">Discord ID</div>
        <div className="sidebar__discordBox--user">bill gates</div>
      </div>
      <Button className="box__button sidebar__discordBox--right">Unbind</Button>
    </div>
  );
};

export default DiscordBox;
