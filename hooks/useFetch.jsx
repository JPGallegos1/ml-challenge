export default function useFetch() {
  return {
    fetchResults: async (query) => {
      if (!query) return {};
      const response = await fetch(
        `http://localhost:3000/api/items?q=${query}`
      );
      const results = await response.json();
      return results || [];
    },
  };
}
