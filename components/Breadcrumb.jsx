function Breadcrumb({ categories = [] }) {
  return (
    <div className="breadcrumb-container">
      <ul
        className="breadcrumb-list flex-row"
        data-testid="breadcrumb"
        role="nav"
      >
        {!categories.length
          ? "Productos"
          : categories.map((category, index) => (
              <li
                data-testid="breadcrumb"
                className="breadcrumb"
                key={category}
              >
                {category} {categories.length - 1 === index ? "" : ">"}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
