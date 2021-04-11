function CardShipping({ shipping, price }) {
  return (
    <div className="flex">
      <h2 className="card-price">
        {price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
      </h2>
      {shipping && (
        <img
          className="card-shipping"
          src="/assets/ic_shipping.png"
          alt="Producto con envío"
        />
      )}
    </div>
  );
}

export default CardShipping;
