import axios from "axios";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER,USER_LOADING,GET_ERRORS } from "./type";

  

export const registerUser = (userData) => dispatch =>{
    axios
    .post('http://localhost:3001/bikeRent/registerUser',userData)
    .then(res => {})
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))

}
export const loginUser = userData =>{
    return (dispatch)=>{
        axios.post('http://192.168.1.7:3001/bikeRent/loginUser', userData).then(res=>{
            console.log(res)
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
        
        
    }
}
export const setCurrentUser = decoded =>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}
export const setUserLoading = ()=>{
    return {
        type:USER_LOADING
    }
}

export const logOutUser = () => dispatch =>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}