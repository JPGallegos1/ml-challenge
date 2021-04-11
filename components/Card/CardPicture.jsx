function CardPicture({ picture, title }) {
  return (
    <div className="card-image">
      <img src={picture} alt={title} />
    </div>
  );
}

export default CardPicture;
