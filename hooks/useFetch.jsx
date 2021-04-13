import { useProductsContext } from "../contexts/ProductContext";
export default function useFetch() {
  const context = useProductsContext();
  const { setLoading, setError } = context || {};

  return {
    onSearchProducts: async (query) => {
      setLoading(true);
      try {
        if (query !== "") {
          const response = await fetch(
            `http://localhost:3000/api/items?q=${query}`
          );
          const data = await response.json();
          if (data) return data;
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
    getProductById: async (id) => {
      setLoading(true);
      try {
        if (id !== "" || id !== undefined) {
          const response = await fetch(`http://localhost:3000/api/items/${id}`);
          const data = await response.json();
          if (data) return data;
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
  };
}
