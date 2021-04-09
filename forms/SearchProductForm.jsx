import { useProductsContext } from "../contexts/ProductContext";

function SearchProductForm() {
  const { onSearch, setQuery } = useProductsContext();

  return (
    <div className="form">
      <form className="form-content" onSubmit={onSearch}>
        <input
          className="form-input__center"
          type="text"
          placeholder="Busca el producto que quieras.."
          name="query"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="form-button__right" onClick={onSearch} type="submit">
          <div>
            <img src="/assets/ic_Search.png" alt="Lupe de búsqueda" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default SearchProductForm;
