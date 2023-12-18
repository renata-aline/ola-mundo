import Banner from "Componentes/Banner";
import { Outlet } from "react-router-dom";

export default function Paginapadrao() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}
