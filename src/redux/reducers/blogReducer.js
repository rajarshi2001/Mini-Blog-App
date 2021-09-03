import { blogTypes } from "../constants/blogTypes"

const initialstate = {
    blogs : [
        
    ]
}

export const blogReducer = (state=initialstate, action)=>{
    switch(action.type){
        case blogTypes.GET_ALLBLOGS:
            return {...state, blogs: action.payload}
        default: 
            return state
    }
}