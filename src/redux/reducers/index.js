import {combineReducers} from 'redux'
import {blogReducer} from './blogReducer'
import { detailReducer } from './detailReducer' 
import { postReducer } from './postReducer'

export const reducer = combineReducers({
    allBlogs: blogReducer,
    detBlog: detailReducer,
    postBlog: postReducer,
})