import { blogTypes } from "../constants/blogTypes"



export const postReducer = (state={}, action) =>{
    switch(action.type){
        case blogTypes.POST_BLOG:
            return action.payload
        default:
            return state
    }
}