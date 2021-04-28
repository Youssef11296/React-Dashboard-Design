const ShowcaseLine = ({ date, product, size, price, website, status }) => {
  return (
    <div className="showcase__line">
      <div className="date">{date}</div>
      <div className="product">{product}</div>
      <div className="size">{size}</div>
      <div className="website">{website}</div>
      <div className="price">${price}</div>
      <div
        className="status"
        style={{
          textAlign: "left",
          marginRight: status !== "success" ? "30px" : "",
          color: status === "success" ? "#63f4f7" : "#fe7448",
          backgroundColor:
            status === "success"
              ? "rgba(99, 244, 247, 0.2)"
              : "rgba(254, 116, 72, 0.2)",
        }}
      >
        {status}
      </div>
    </div>
  );
};

export default ShowcaseLine;
