function Breadcrumb({ categories }) {
  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb-list flex-row" role="nav">
        {categories.map((category, index) => (
          <li className="breadcrumb" key={category}>
            {category} {categories.length - 1 === index ? "" : ">"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
