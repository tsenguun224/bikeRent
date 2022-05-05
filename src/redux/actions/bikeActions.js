import axios from "axios"
import { ADD_BIKE,LOAD_BIKE,getOwnBike } from "./type"
import { url } from "../../url"
export const addBike = (newBike) =>{
    return async (dispatch) =>{
        const {data} = await axios.post(url + ':8000/bikeRent/insertBike',newBike);
        dispatch({
            type:ADD_BIKE,
            payload:data
        })
    }
}
export const loadBike = (searchField) =>{
    if(searchField === ''){
        return async (dispatch) => {
            const {data}  = await axios.get(url + ':8000/bikeRent/getBikes')
           dispatch({
               type:LOAD_BIKE,
               data:data
           })
       }
    }
    else{
        return async (dispatch)=>{
            const {data} = await axios.get(url + ":8000/bikeRent/getBikes?bikeName=" + searchField)
            dispatch({
                type:LOAD_BIKE,
                data:data
            })
        }
    }
}
export const getOwnBikes = () =>{
    return async (dispatch) =>{
        const {data} = await axios.get(url + ':8000/bikeRent/getOwnBike')
        dispatch({
            type:getOwnBike,
            data:data
        })
    }
}