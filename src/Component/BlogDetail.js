import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import { get_blog } from '../redux/actions/blogActions'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const BlogDetails = () => {
    const context = useParams()
    const history = useHistory()
    const item = useSelector((state) => {
        return state.detBlog
    })
    const { blog } = item

    const {id, title, author, desc, url_news, post_img } = blog
    const dispatch = useDispatch()

    const fetchblog = async (id) => {
        const res = await axios.get(`https://reactdjangoblog.herokuapp.com/blogapi/${id}`).catch(
            err => console.log(err)
        )
        dispatch(get_blog(res.data))
    }
    useEffect(() => {
        if (context.id && context.id !== "") {
            fetchblog(context.id)
        }
    }, [context.id])
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card p-3 shadow">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <img src={post_img} alt="image" className="img-fluid"
                                        style={{
                                            height: 450, backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            borderRadius: 500
                                        }} />
                                    <h4 className="text-dark text-center my-2"><i>Written by: {author}</i></h4>
                                </div>
                                <div className="col-12 col-lg-8 p-2">
                                    <h2 className="text-dark mb-3 text-center"> <u> <i> Title: {title}</i></u></h2>

                                    <h3 className="text-dark mb-3 text-center"> <u> <i> See the blog:-</i></u></h3>
                                    <p className="mb-3"> <i>{desc}</i></p>
                                    <h3 className="text-dark mb-3 text-center"> <u> <i> For more info</i></u></h3>
                                    <a href={url_news} target="_blank" className="text-center mb-3" className="btn btn-outline-success w-100">Get more info</a>
                                    <div className="text-center my-3">
                                        <button className="btn btn-danger" onClick={() => { history.push('/') }}>Go to Home</button>
                                        <br />
                                        <br />
                                        <Link to= {`/update/${id}`} className="btn btn-outline-primary" >Edit Blog</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogDetails