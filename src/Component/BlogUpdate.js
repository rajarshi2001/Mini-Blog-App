import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
const BlogUpdate = () => {
    const context = useParams()
    const [atr, setAtr] = useState({
        title: "",
        author: "",
        desc: "",
        url_news: "",
        post_img: "",
    })

    const getData = async (id) =>{
        const res = await axios.get(`http://127.0.0.1:8000/blogapi/${id}`).catch(err => console.log(err))
        setAtr({
            title: res.data.title,
            author: res.data.author,
            desc: res.data.desc,
            url_news: res.data.url_news,
            post_img: "",
        })
    }
    useEffect(() => {
        if (context.id !== undefined) {
            getData(context.id)
        }
    }, [context.id])
    const editBlogs = (e) => {
        e.preventDefault()
        if (atr.title !== "" && atr.author !== "" && atr.desc !== "" && atr.url_news !== "" && atr.post_img !== "") {
            const formdata = new FormData()
            formdata.append('title', atr.title)
            formdata.append('author', atr.author)
            formdata.append('desc', atr.desc)
            formdata.append('url_news', atr.url_news)
            formdata.append('post_img', atr.post_img)
            axios.put(`http://reactdjangoblog.herokuapp.com/blogapi/${context.id}/`, formdata).then(res => console.log(res)).catch
                (err => console.log(err))
            setAtr({
                title: "",
                author: "",
                desc: "",
                url_news: "",
                post_img: "",
            })
            alert('post has been updated')
        }
        else{
            alert('fill the fields')
        }
    }

    return (
        <>
            <div className="container my-3">

                <div className="row">
                    <div className="col-12 col-lg-12">
                        <form className="shadow p-3" onSubmit={editBlogs}>
                            <h2 className="text-center alert alert-danger"><i>Edit your blog</i></h2>
                            <div className="form-group mb-3">
                                <label htmlFor="title">Edit Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    value={atr.title}
                                    onChange={(e) => { setAtr({ ...atr, title: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="author">Edit Author Name:</label>
                                <input
                                    type="text"
                                    name="author"
                                    className="form-control"
                                    value={atr.author}
                                    onChange={(e) => { setAtr({ ...atr, author: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="desc">Edit mini Blog:</label>
                                <textarea
                                    name="desc"
                                    value={atr.desc}
                                    className="form-control"
                                    onChange={(e) => { setAtr({ ...atr, desc: e.target.value }) }}
                                >
                                </textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="urlnews">Edit Link:</label>
                                <input
                                    type="url"
                                    name="urlnews"
                                    className="form-control"
                                    value={atr.url_news}
                                    onChange={(e) => { setAtr({ ...atr, url_news: e.target.value }) }}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="blogimage">Upload Title Image:</label>
                                <input
                                    type="file"
                                    name="blogimage"
                                    className="form-control"
                                    onChange={(e) => { setAtr({ ...atr, post_img: e.target.files[0] }) }}
                                />
                            </div>

                            <div className="text-center">
                                <input type="submit" className="btn btn-outline-success my-3 w-100" value="Edit Post" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogUpdate
