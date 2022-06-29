import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Novels from "../pages/Novels"
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Discord from "../pages/Discord";
import Donations from "../pages/Donations";
import Contato from "../pages/Contato";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
   return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="novels" element={<Novels />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="login" element={<Login />} />
      <Route path="discord" element={<Discord />} />
      <Route path="donations" element={<Donations />} />
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   )
}

export default AppRoutes;