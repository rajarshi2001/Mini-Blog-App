import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { post_blog } from '../redux/actions/blogActions';
const BlogPost = () => {
    const [check, setCheck] = useState(false)
    const items = useSelector((state) => {
        return state.postBlog
    })
    const dispatch = useDispatch()
    const [attr, setAttr] = useState({
        title: "",
        author: "",
        desc: "",
        url_news: "",
        post_img: null,
    })
    const subBlogs = (e) => {
        e.preventDefault()
        if (attr.author !== "" && attr.title !== "" && attr.url_news !== "" && attr.post_img !== null && attr.desc !== "") {
            setCheck(true)
            dispatch(post_blog(attr))
        }
        else {
            alert("Please fill all the fields")
        }
    }
    useEffect(() => {
        if (attr && attr.length !== 0 && check) {

            const formdata = new FormData()
            formdata.append('title', items.title)
            formdata.append('author', items.author)
            formdata.append('desc', items.desc)
            formdata.append('url_news', items.url_news)
            formdata.append('post_img', items.post_img)
            axios.post('https://reactdjangoblog.herokuapp.com/blogapi/', formdata).then(res => console.log(res)).catch(err => console.log(err))
            setAttr(
                {
                    title: "",
                    author: "",
                    desc: "",
                    url_news: "",
                    post_img: null,
                }
            )
            alert('Your post is saved')
            setCheck(false)
        }
    }, [items])
    return (
        <>
            <div className="container my-3">

                <div className="row">
                    <div className="col-12 col-lg-12">
                        <form className="shadow p-3" onSubmit={subBlogs}>
                            <h2 className="text-center alert alert-danger"><i>Create your blog</i></h2>
                            <div className="form-group mb-3">
                                <label htmlFor="title">Create Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    value={attr.title}
                                    onChange={(e) => { setAttr({ ...attr, title: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="author">Author Name:</label>
                                <input
                                    type="text"
                                    name="author"
                                    className="form-control"
                                    value={attr.author}
                                    onChange={(e) => { setAttr({ ...attr, author: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="desc">Create a mini Blog:</label>
                                <textarea
                                    name="desc"
                                    value={attr.desc}
                                    className="form-control"
                                    onChange={(e) => { setAttr({ ...attr, desc: e.target.value }) }}
                                >
                                </textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="urlnews">Actual Link:</label>
                                <input
                                    type="url"
                                    name="urlnews"
                                    className="form-control"
                                    value={attr.url_news}
                                    onChange={(e) => { setAttr({ ...attr, url_news: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="blogimage">Upload Title Image:</label>
                                <input
                                    type="file"
                                    name="blogimage"
                                    className="form-control"
                                    onChange={(e) => { setAttr({ ...attr, post_img: e.target.files[0] }) }}
                                />
                            </div>

                            <div className="text-center">
                                <input type="submit" className="btn btn-outline-success my-3 w-100" value="Add Post" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogPost