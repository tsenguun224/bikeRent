import { ADD_BIKE,LOAD_BIKE } from "./type"
export const addBike = (newBike) =>{
    return {
        type:ADD_BIKE,
        paylaod:newBike
    }
}
export const loadBike = () =>{
    return {
        type:LOAD_BIKE
    }
}