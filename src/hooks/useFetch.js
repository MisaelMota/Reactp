import { useState, useEffect } from "react"
import Axios from "axios"

const useFetch = (endpoint) => {

    const [data, setData] = useState()
    const [error,setError]=useState()

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_URL_API}${endpoint}`)
            .then(data => setData(data.data))
            .catch(err=>setError(err))


    }, [endpoint])

    return [data,error]

}

/*fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
    .then(response => response.json())
    .then(data => setCupcakes(data))
    .catch(e=>console.log(e))*/


export default useFetch;