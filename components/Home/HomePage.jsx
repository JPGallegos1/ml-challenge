import { useProductsContext } from "../../contexts/ProductContext";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";
import ReactImageZoom from "react-image-zoom";
import Card from "../Card/Card";

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
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              visitProduct={visitProduct}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
