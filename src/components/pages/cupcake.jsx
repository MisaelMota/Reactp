import { useState, useRef } from "react"
import "../styles/cup.css"
import PropTypes from "prop-types"

function Cupcake(props) {

    const [state, setState] = useState(false)//esto tambien puede ser una colección de estados, es decir un objeto {vendido: false}
    const [reservado, setReservado] = useState(false)

    const vender = () => {
        setState(true)
        setReservado(true)
        const elemento= fotoCupcake.current
        elemento.classList.add("vendido")
    }
    const reservar = () => setReservado(true)

    const fotoCupcake=useRef()//esto es basicamente un getElemenbyid

/*
    useEffect(() => { // aqui puedo poner alguna logica para que el componente se renderice de cierta manera luego de  el cambio de un estado
        const elemento= fotoCupcake.current
        

        if(reservado){elemento.classList.add("vendido")}
    }, [reservado])//el arreglo observa un estado*/

    

    return (
        <div className="cupcake">
            <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img ref={fotoCupcake} src={props.image} alt={props.alt} />
                </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <h3 className="t5 s-mb-2 s-center">
                        {props.name}
                    </h3>
                    <div className="s-mb-2 s-main-center">
                        {`Sabor: ${props.sabor}`}
                    </div>
                    <div className="s-main-center">
                        <a className="button--ghost-alert button--tiny" href="#">{props.costo}</a>
                    </div>
                    <div className="s-main-center">
                        <p>
                            <b>
                                Estado: {state ? "Vendido" : "A la Venta"}
                            </b>
                        </p>
                    </div>

                    {
                        !state && <button className="vender" onClick={vender} >Vender</button>

                    }

                    <div className="s-main-center">
                        <p>
                            <b>
                                Estado: {reservado ? "reservado" : "Libre"}
                            </b>
                        </p>
                    </div>

                    {
                        !reservado && <button className="vender" onClick={reservar} >reservar</button>

                    }


                </div>
            </div>
        </div >
    )
}


Cupcake.propTypes={
    costo: PropTypes.number,
    image: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    sabor: PropTypes.string.isRequired,
}

Cupcake.defaultProps={
    image:"https://th.bing.com/th/id/R.9e1a23807b533188bccc9e9435d198be?rik=NBP3i19sYrRv0w&pid=ImgRaw&r=0",
    costo:0
}

export default Cupcake