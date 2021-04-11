import CardShipping from "./CardShipping";

function CardInfo({ price, title, shipping }) {
  return (
    <div className="card-info flex-column">
      <CardShipping price={price} shipping={shipping} />
      <h4 className="card-title">{title}</h4>
    </div>
  );
}

export default CardInfo;
