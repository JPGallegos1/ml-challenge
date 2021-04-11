import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, section }) {
  return (
    <div className="ml-body__main-content">
      <Header />
      <main className="layout-stack">
        <section id={section} className="layout-stack__container">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
