import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import Paginapadrao from "Componentes/PaginaPadrao"; 
import Post from "Paginas/Post";
import NaoEncontrado from "Paginas/NaoEncontrado";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Paginapadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
