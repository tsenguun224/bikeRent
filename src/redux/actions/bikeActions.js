import axios from "axios"
import { ADD_BIKE,LOAD_BIKE } from "./type"
export const addBike = (newBike) =>{
    return async (dispatch) =>{
        const {data} = await axios.post('http://192.168.1.2:8000/bikeRent/insertBike',newBike);
        dispatch({
            type:ADD_BIKE,
            payload:data
        })
    }
}
export const loadBike = () =>{
    return async (dispatch) => {
         const {data}  = await axios.get('http://192.168.1.2:8000/bikeRent/getBikes')
        dispatch({
            type:LOAD_BIKE,
            data:data
        })
    }
}