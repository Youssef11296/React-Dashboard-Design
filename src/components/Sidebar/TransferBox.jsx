import { Button } from "@material-ui/core";

const TransferBox = () => {
  return (
    <div className="sidebar__box sidebar__transferBox">
      <div className="sidebar__transferBox--left">
        <div className="sidebar__transferBox--title">transfer ID</div>
        <div className="sidebar__transferBox--user">
          <p>Current Email</p>
          <p>billgates@email.com</p>
        </div>
      </div>
      <Button className="box__button sidebar__transferBox--right">
        Transfer to
      </Button>
    </div>
  );
};

export default TransferBox;
