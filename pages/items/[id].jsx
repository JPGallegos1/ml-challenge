import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import useFetch from "../../hooks/useFetch";
import { useProductsContext } from "../../contexts/ProductContext";

function Product() {
  const [product, setProduct] = useState({});
  const { categories } = useProductsContext();
  const router = useRouter();
  const { getProductById } = useFetch();

  const getProduct = async (id) => {
    const data = await getProductById(id);
    const product = data;
    if (product) setProduct(product.item);
  };

  useEffect(() => {
    getProduct(router.query.id);
  }, [router.query.id]);
  return (
    <Layout section="product">
      {product ? (
        <div>
          <Breadcrumb categories={categories} />
          <div className="product flex">
            <div className="product-column__left flex-column">
              <div className="product-image">
                <img src={product.picture} alt={product.title} />
              </div>
              <div className="product-description">
                <h2>Description del producto</h2>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="product-column__right flex-column">
              <p>
                {product.condition === "new" ? "Nuevo -" : null}{" "}
                {product.sold_quantity} vendidos
              </p>
              <h1>{product.title}</h1>
              <h3>$ {product.price?.amount}</h3>

              <button>Comprar</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </Layout>
  );
}

export default Product;
