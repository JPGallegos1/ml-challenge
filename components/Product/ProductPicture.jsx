function ProductPicture({ picture = "", title = "" }) {
  return (
    <div className="product-image">
      <img src={picture} alt={title} />
    </div>
  );
}

export default ProductPicture;
