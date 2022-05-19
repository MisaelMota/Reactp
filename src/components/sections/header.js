import "../styles/stylesM.css"
import { Link,NavLink } from "react-router-dom";

const header=()=>{
    return(
        <header class="main-header">
      <div class="ed-grid s-grid-5 lg-grid-4">
        <div class="image-div s-cols-4 lg-cols-1 s-cross-center">
          <a href="/"><img class="main-logo" src="https://ux.ed.team/img/edteam-ux.svg"/></a>
          </div>
        <div class="div-menu s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav class="main-menu" id="main-menu">
            <ul>
              <li><NavLink to="/" exact>Inicio</NavLink></li>
              <li><NavLink to="/cupcakes" exact>Cupcakes</NavLink></li>
              <li><NavLink to="/nosotros" exact>Nosotros</NavLink></li>
            </ul>
          </nav>
          <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
    )
}

export default header;