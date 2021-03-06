import React from "react";
// @ts-ignore
import { createRoot } from "react-dom/client";
import { App } from "./Paginas/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./Paginas/routes";
import { Blog } from "./Paginas/Blog/Blog";
import { AgendaEventos } from "./Paginas/AgendaEventos/AgendaEventos";
import { CatalogoServicos } from "./Paginas/CatalogoServicos/CatalogoServicos";
import { Contato } from "./Paginas/Contato/Contato";
import { QuemSomos } from "./Paginas/QuemSomos/QuemSomos";
import { Login } from "./Paginas/Login/Login";
import { Loja } from "./Paginas/Loja/Loja";
import { PAGINA_NAO_ENCONTRADA } from "./Paginas/PAGINA_NAO_ENCONTRADA/PAGINA_NAO_ENCONTRADA";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={ROUTES.PAGINA_INITIAL}>
          <Route element={<Blog />} path={ROUTES.BLOG} />
          <Route element={<Loja />} path={ROUTES.LOJA} />
          <Route element={<AgendaEventos />} path={ROUTES.AGENDA} />
          <Route element={<CatalogoServicos />} path={ROUTES.CATALOGO} />
          <Route element={<Contato />} path={ROUTES.CONTATO} />
          <Route element={<QuemSomos />} path={ROUTES.QUEM} />
          <Route element={<Login />} path={ROUTES.LOGIN} />
          <Route element={<Login />} path={ROUTES.FORUM} /> {/*TODO*/}
          <Route element={<Login />} path={ROUTES.FAQ} /> {/*TODO*/}
          <Route
            element={<PAGINA_NAO_ENCONTRADA />}
            path={ROUTES.PAGINA_NAO_ENCONTRADA}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
