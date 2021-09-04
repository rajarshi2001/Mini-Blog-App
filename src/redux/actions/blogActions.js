import { blogTypes } from "../constants/blogTypes";

export const get_All_Blogs = (blogs)=>{
    return {
        type: blogTypes.GET_ALLBLOGS,
        payload: blogs
    }
}

export const get_blog = (blog) =>{
    return{
        type: blogTypes.GET_BLOG,
        payload: blog
    }
}

export const post_blog = (pblog) =>{
    return{
        type: blogTypes.POST_BLOG,
        payload: pblog
    }
}
export const removeblog = (id) =>{
    return{
        type: blogTypes.REMOVE_BLOG,
        payload: id
    }
}