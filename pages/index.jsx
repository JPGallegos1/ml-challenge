import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthor from "../hooks/useAuthor";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const { seller } = useAuthor();
  const { fetchResults } = useFetch();

  const onSearch = async (event) => {
    event.preventDefault();

    const results = await fetchResults(query);
    console.log(results);
    setProducts(results);

    router.push(`/?q=${query}`);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Busca el producto que quieras.."
          name="query"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={onSearch} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Home;
