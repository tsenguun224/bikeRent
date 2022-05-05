import { ADD_BIKE,LOAD_BIKE,getOwnBike } from "../actions/type";


export default function(state = [],action){
    switch(action.type){
        case(ADD_BIKE):{
            return [...state,action.payload]
        }
        case(LOAD_BIKE):{
            return action.data
        }
        case(getOwnBike):
            return action.data
        default:
            return state;
    }
}