import { ADD_BIKE,LOAD_BIKE } from "../actions/type";


export default function(state = [],action){
    switch(action.type){
        case(ADD_BIKE):{
            return [...state,action.payload]
        }
        case(LOAD_BIKE):{
            return action.payload
        }
        default:
            return state;
    }
}