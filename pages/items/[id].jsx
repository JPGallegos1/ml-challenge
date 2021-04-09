import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
}

export default Product;
