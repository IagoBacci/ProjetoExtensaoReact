import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Vendas from "./pages/Vendas/index.jsx";
import Relatorios from "./pages/Relatorios/index.jsx";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroEmpresa from "./pages/CadastroEmpresa/index.jsx";
import CadastroProduto from "./pages/CadastroProduto/index.jsx";
import Estoque from "./pages/Estoque/index.jsx";
import Home from "./pages/Home/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/cadastroCliente" element={<CadastroCliente />} />
      <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
      <Route path="/cadastroProduto" element={<CadastroProduto />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/vendas" element={<Vendas />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
