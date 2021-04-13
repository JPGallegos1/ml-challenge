import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <img src="/assets/Logo_ML.png" alt="Logo de Mercado Libre" />
      </Link>
    </div>
  );
}

export default Logo;
