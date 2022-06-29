import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";

import AppRoutes from './routes/AppRoutes';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Logo/>
      <Menu/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
