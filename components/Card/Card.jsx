import CardPicture from "./CardPicture";
import CardInfo from "./CardInfo";
import CardLocation from "./CardLocation";

function Card({ product, visitProduct }) {
  return (
    <>
      <li className="product" onClick={() => visitProduct(product.id)}>
        <div className="product-card flex">
          <div className="product-card__container flex">
            <CardPicture picture={product.picture} title={product.title} />

            <CardInfo price={product.price[0].amount} title={product.title} />
          </div>

          <CardLocation location={product.location} />
        </div>
      </li>
    </>
  );
}

export default Card;
