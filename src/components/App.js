import "./styles/styles.scss"
import Home from "./pages/home";
import Header from "./sections/header";
import AboutUs from "./pages/aboutUs";
import Desplegar from "./pages/DesplegarCup"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Cupcakes" element={<Desplegar peticion="cupcakes?vendido_like=false"/>} />
          <Route path="nosotros" element={<AboutUs/>} />
        </Routes>

      </BrowserRouter>



    </div>

  )


}

export default App;
