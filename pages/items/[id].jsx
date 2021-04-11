import { useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";

function Product() {
  const router = useRouter();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/items/${router.query.id}`
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
}

export default Product;
