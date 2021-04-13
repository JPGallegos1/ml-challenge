import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductPicture from "../../components/Product/ProductPicture";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductInfo from "../../components/Product/ProductInfo";
import { useProductsContext } from "../../contexts/ProductContext";
import useFetch from "../../hooks/useFetch";

function Product() {
  const [product, setProduct] = useState({});
  const context = useProductsContext();
  const { categories, loading } = context || {};
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
      <div>
        <Breadcrumb categories={categories} />
        <div className="product flex">
          <div className="product-column__left flex-column">
            <ProductPicture picture={product.picture} title={product.title} />

            <ProductDescription description={product.description} />
          </div>
          <div className="product-column__right flex-column">
            <ProductInfo
              condition={product.condition}
              quantity={product.sold_quantity}
              title={product.title}
              amount={product.price?.amount}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
