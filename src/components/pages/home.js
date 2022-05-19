import Servicios from "../sections/servicios";
import Desplegar from "./DesplegarCup";

const home = () => {
    return(
    <>
        <div class="main-banner img-container dark-color">
            <div class="ed-grid lg-grid-6">
                <div class="lg-cols-4 lg-x-2">
                    <img class="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" />
                    <div class="main-banner__data s-center">
                        <p class="s-mb-0 t2">EDteam Styleguides</p>
                        <p>Tienda de cupcakes</p><a class="button" href="#">Ver Cupcakes</a>
                    </div>
                </div>
            </div>
        </div>

        <Desplegar peticion="cupcakes?sabor_like=chocolate"/>
        
        <Servicios peticion="Servicios"/>
    </>
    )
}

export default home;