import { useProductsContext } from "../contexts/ProductContext";

function SearchProductForm() {
  const { query, onSearch, setQuery, inputFocus } = useProductsContext();

  return (
    <div className="form">
      <form className="form-content" onSubmit={onSearch}>
        <input
          className="form-input__center"
          type="text"
          autoComplete="off"
          placeholder="Nunca dejes de buscar"
          name="query"
          ref={inputFocus}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="form-button__right"
          onClick={onSearch}
          type="submit"
          disabled={query.length <= 2}
        >
          <div>
            <img src="/assets/ic_Search.png" alt="Lupe de búsqueda" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default SearchProductForm;
