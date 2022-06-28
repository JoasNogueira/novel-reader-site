import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Novels from "../pages/Novels"
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Discord from "../pages/Discord";
import Donations from "../pages/Donations";
import Contato from "../pages/Contato";

const AppRoutes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Novels }  path="/usuario" />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Login }  path="/login" />
           <Route component = { Discord }  path="/discord" />
           <Route component = { Donations }  path="/donations" />
           <Route component = { Contato }  path="/contato" />
       </BrowserRouter>
   )
}

export default AppRoutes;