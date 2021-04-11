import CardPicture from "./CardPicture";
import CardInfo from "./CardInfo";
import CardLocation from "./CardLocation";

function Card({ product, visitProduct }) {
  return (
    <>
      <li className="products-item" onClick={() => visitProduct(product.id)}>
        <div className="card flex">
          <div className="card-container flex">
            <CardPicture picture={product.picture} title={product.title} />

            <CardInfo
              price={product.price[0].amount}
              title={product.title}
              shipping={product.free_shipping}
            />
          </div>

          <CardLocation location={product.location} />
        </div>
      </li>
    </>
  );
}

export default Card;
