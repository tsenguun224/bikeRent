import axios from "axios"
import { ADD_BIKE,LOAD_BIKE } from "./type"
export const addBike = (newBike) =>{
    return {
        type:ADD_BIKE,
        paylaod:newBike
    }
}
export const loadBike = () =>{
    return async (dispatch) => {
         const {data}  = await axios.get('http://192.168.1.7:3001/bikeRent/getBikes')
        dispatch({
            type:LOAD_BIKE,
            data:data
        })
    }
}