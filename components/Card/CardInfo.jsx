function CardInfo({ price, title }) {
  return (
    <div className="product-card__info flex-column">
      <h2 className="product-card__price">$ {price}</h2>
      <h4 className="product-card__title">{title}</h4>
    </div>
  );
}

export default CardInfo;
