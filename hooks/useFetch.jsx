import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(async () => {
    if (!url) return {};
    setLoading(true);

    try {
      const response = await fetch(url);
      const res = await response.json();
      if (res) setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}
