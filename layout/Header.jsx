import Logo from "../components/Logo";
import SearchProductForm from "../forms/SearchProductForm";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />

        <SearchProductForm />
      </div>
    </header>
  );
}

export default Header;
