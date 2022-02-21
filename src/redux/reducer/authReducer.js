import { SET_CURRENT_USER,USER_LOADING } from "../actions/type";



const initialState = {
    isAuthenticated:false,
    user:{},
    loading:false
};

export default function(state = initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;        
    }
}