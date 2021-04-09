import { Products } from "../contexts/ProductContext";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Products>
      <Component {...pageProps} />
    </Products>
  );
}
