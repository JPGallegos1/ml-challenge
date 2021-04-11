import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";

const ProductsContext = createContext();

export function Products({ children }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const inputFocus = useRef(null);

  const router = useRouter();
  const { onSearchProducts } = useFetch();

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  const onSearch = async (event) => {
    event.preventDefault();
    const data = await onSearchProducts(query);
    const results = data;
    if (!results) return {};
    setProducts(results.items);
    setCategories(results.categories);

    router.push(`/?q=${query}`);
  };

  const context = {
    query,
    products,
    categories,
    inputFocus,
    onSearch,
    setQuery,
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
