import { useState } from "react";
import { useRouter } from "next/router";
import { useProductsContext } from "../contexts/ProductContext";
import useFetch from "./useFetch";

function useForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { onSearchProducts } = useFetch();
  const context = useProductsContext();
  const { setProducts, setCategories, inputFocus } = context || {};

  return {
    onSearch: async (event) => {
      event.preventDefault();
      const data = await onSearchProducts(query);
      const results = data;
      if (!results) return {};
      setProducts(results.items);
      setCategories(results.categories);

      router.push(`/?q=${query}`);
    },
    query,
    setQuery,
    inputFocus,
  };
}

export default useForm;
