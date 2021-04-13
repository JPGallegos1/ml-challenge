import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";

export const ProductsContext = createContext();

export function Products({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const inputFocus = useRef(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  const context = {
    products,
    setProducts,
    categories,
    setCategories,
    loading,
    setLoading,
    error,
    setError,
    inputFocus,
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
