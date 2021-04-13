import { useEffect } from "react";
import { useProductsContext } from "../../contexts/ProductContext";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";
import Card from "../Card/Card";
import Loading from "../Loading";

function HomePage() {
  const context = useProductsContext();
  const { products = [], categories, loading, setProducts } = context || {};
  const router = useRouter();
  const visitProduct = (id) => {
    router.push(`/items/${id}`);
  };

  useEffect(() => {
    if (window !== undefined) {
      const storedProducts = window.localStorage.getItem("products");
      products && setProducts(JSON.parse(storedProducts));
    }
  }, [setProducts]);

  return (
    <div>
      {!products.length ? (
        <Loading text="Cargando productos..." />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default HomePage;
