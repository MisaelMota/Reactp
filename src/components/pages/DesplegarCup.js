import Cupcake from "./cupcake";
import "../styles/cup.css"
import useFetch from "../../hooks/useFetch";


function Desplegar({ peticion }) {
    
    const [cupcakes,error]=useFetch(peticion)
    
    if(error){
        return <span>Hubo un error:</span>
    }

    return (
        <div >
            {
                cupcakes ? (
                    <div className="div-Desplegar ed-grid m-grid-4 s-grid-2">
                        {
                            cupcakes.map(c => <Cupcake
                                key={c.id}
                                image={c.image}
                                alt={c.descripción}
                                sabor={c.sabor}
                                costo={c.precio} />)
                        }
                    </div>

                ) : <span>cargando...</span>
            }
        </div>
    )
}

export default Desplegar