function ProductInfo({ condition, quantity, title, amount = 0 }) {
  return (
    <>
      <p>
        {condition === "new" ? "Nuevo -" : null} {quantity} vendidos
      </p>
      <h1>{title}</h1>
      <h3>
        {amount.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
      </h3>

      <button>Comprar</button>
    </>
  );
}

export default ProductInfo;
