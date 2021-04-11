function CardPicture({ picture, title }) {
  return (
    <div className="product-card__image">
      <img src={picture} alt={title} />
    </div>
  );
}

export default CardPicture;
