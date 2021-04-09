import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="ml-body__main-content">
      <Header />
      <main className="layout-stack">
        <div className="layout-stack__container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
