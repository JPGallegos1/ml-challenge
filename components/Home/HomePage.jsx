import { useProductsContext } from "../../contexts/ProductContext";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";
import Card from "../Card/Card";

function HomePage() {
  const { products, categories } = useProductsContext();
  const router = useRouter();
  const visitProduct = (id) => {
    router.push(`/items/${id}`);
  };

  return (
    <div>
      <Breadcrumb categories={categories} />
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
    </div>
  );
}

export default HomePage;
