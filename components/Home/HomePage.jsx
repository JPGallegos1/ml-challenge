import { useProductsContext } from "../../contexts/ProductContext";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";
import ReactImageZoom from "react-image-zoom";

function HomePage() {
  const { products } = useProductsContext();
  const router = useRouter();
  const visitProduct = (id) => {
    router.push(`/items/${id}`);
  };

  return (
    <section>
      <Breadcrumb />
      <div className="products-container">
        <ul className="products-list flex-column">
          {products.map((product) => {
            console.log(product);
            return (
              <li
                className="product"
                key={product.id}
                onClick={() => visitProduct(product.id)}
              >
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
