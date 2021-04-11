import { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";

const ProductsContext = createContext();

export function Products({ children }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/items?q=${query}`
  );

  const onSearch = async (event) => {
    event.preventDefault();
    console.log(data);

    const results = data;
    setProducts(results.items);
    setCategories(results.categories);

    router.push(`/?q=${query}`);
  };

  const context = {
    onSearch,
    setQuery,
    products,
    categories,
  };

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = ProductsContext;
  if (!context) {
    throw new Error(
      "You're trying to render the context outside of the React Component"
    );
  }
  return useContext(context);
}
