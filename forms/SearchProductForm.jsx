import useForm from "../hooks/useForm";

function SearchProductForm() {
  const { query, setQuery, onSearch, inputFocus } = useForm();

  return (
    <div className="form">
      <form className="form-content" data-testid="form" onSubmit={onSearch}>
        <input
          className="form-input__center"
          data-testid="input-search"
          type="text"
          autoComplete="off"
          placeholder="Nunca dejes de buscar"
          name="query"
          ref={inputFocus}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="form-button__right"
          data-testid="btn-search"
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
