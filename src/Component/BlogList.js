import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import axios from 'axios'
import { get_All_Blogs } from '../redux/actions/blogActions';
import BlogComp from './BlogComp';
const BlogList = () => {
    const [del, setDel] = useState(false)
    const bloglist = useSelector((state) => {
        return state.allBlogs
    })
    const { blogs } = bloglist
    const dispatch = useDispatch()
    const fetchallblogs = async () => {
        const res = await axios.get('http://127.0.0.1:8000/blogapi/').catch
            (err => console.log(err))
            dispatch(get_All_Blogs(res.data))
    }
    const delBlog = (blog_id) =>{
        axios.delete(`http://127.0.0.1:8000/blogapi/${blog_id}`).catch(err => console.log(err))
        setDel(true)
       
    }
    useEffect(() => {
        fetchallblogs()
        setDel(false)
      },[del])

    useEffect(() => {
      fetchallblogs()
    },[])
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {
                        blogs.map((ele) => {
                            const {id, title, desc, author, url_news, post_img, created_date} = ele
                            return (
                                <BlogComp key={id} delBlog={delBlog} id={id} title={title} post_img={post_img} created_date={created_date} author={author}  /> 
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};
export default BlogList