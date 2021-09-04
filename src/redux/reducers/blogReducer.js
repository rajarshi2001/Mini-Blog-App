import { blogTypes } from "../constants/blogTypes"

const initialstate = {
    blogs : [
        
    ]
}

export const blogReducer = (state=initialstate, action)=>{
    switch(action.type){
        case blogTypes.GET_ALLBLOGS:
            return {...state, blogs: action.payload}
        case blogTypes.REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((currEle) =>{
                    return currEle.id !== action.payload
                })
            }
        default: 
            return state
    }
}