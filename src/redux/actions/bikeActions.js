import axios from "axios"
import { ADD_BIKE,LOAD_BIKE } from "./type"
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