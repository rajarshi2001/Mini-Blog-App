import { blogTypes } from "../constants/blogTypes"

const initialstate = {
    blog: {

    }
}

export const detailReducer = (state=initialstate, action) =>{
    switch(action.type){
        case blogTypes.GET_BLOG:
            return {...state, blog: action.payload}
        default:
            return state
    }
}