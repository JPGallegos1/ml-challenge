import CardShipping from "./CardShipping";

function CardInfo({ price, title, shipping }) {
  return (
    <div className="product-card__info flex-column">
      <CardShipping price={price} shipping={shipping} />
      <h4 className="product-card__title">{title}</h4>
    </div>
  );
}

export default CardInfo;
