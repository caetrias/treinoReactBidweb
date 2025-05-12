import Favoritos from "pages/Favoritos";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "components/Rodape";
import Player from "pages/Player";
import NaoEncontrado from "pages/NaoEncontrado";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="favoritos" element={<Favoritos />}></Route>
                        <Route path=":id" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrado />}></Route>
                    </Route>
                </Routes>
            <Rodape /> 
        </BrowserRouter>
    )
}

export default AppRoutes;