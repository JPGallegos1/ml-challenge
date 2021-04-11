function Card({ product, visitProduct }) {
  return (
    <>
      <li className="product" onClick={() => visitProduct(product.id)}>
        <div className="product-card flex">
          <div className="product-card__container flex">
            <div className="product-card__image">
              <img src={product.picture} alt={product.title} />
            </div>
            <div className="product-card__info flex-column">
              <h2 className="product-card__price">
                $ {product.price[0].amount}
              </h2>
              <h4 className="product-card__title">{product.title}</h4>
            </div>
          </div>
          <div className="product-card__location">
            <p>{product.location}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
