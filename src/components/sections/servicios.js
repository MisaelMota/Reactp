import useFetch from "../../hooks/useFetch"
import "../styles/cup.css"

function Servicios({ peticion }) {
   
    const [servicios,error]=useFetch(peticion)
    
    if(error){
        return <span>{JSON.stringify(error)}</span>
    }


    return (
        <div >
            {
                servicios ? (
                    <div className="ed-grid">
                        {


                            servicios.map(c => (

                                <div kety={c.id} >
                                    <h2>{c.Nombre}</h2>
                                    <p>{c.Costo}</p>
                                    
                                </div>


                            )
                            )
                        }
                    </div>

                ) : <span>cargando...</span>
            }
        </div>
    )
}

export default Servicios