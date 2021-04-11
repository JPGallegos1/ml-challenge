function CardShipping({ shipping, price }) {
  return (
    <div className="flex">
      <h2 className="product-card__price">$ {price}</h2>
      {shipping && (
        <img
          className="product-card__shipping"
          src="/assets/ic_shipping.png"
          alt="Producto con envío"
        />
      )}
    </div>
  );
}

export default CardShipping;
