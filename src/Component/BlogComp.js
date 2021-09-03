import React from 'react'
import { Link } from 'react-router-dom'
const BlogComp = ({delBlog, id, title, post_img, author, created_date }) => {
    return (
        <>
            <div className="col-12 col-lg-4" key={id}>
                <div className="card m-2 shadow p-2" style={{height:600}}>
                    <img src={post_img} alt="image" className="img-fluid"  style={{height: 300}}/>
                    <div className="card-body">
                        <h5 className="text-center"> <i>Blog Title: <strong>{title}</strong></i> </h5>
                        <p className="text-center"> <i> Written by: <strong>{author}</strong></i></p>
                        <p className="text-center"> <i> Created at: <strong>{created_date}</strong></i></p>
                        <div className="text-center">
                            <Link to={`/details/${id}`} className="btn btn-outline-primary w-100 my-3">View More</Link>
                            <br />
                            <button className="btn btn-outline-danger w-100" onClick={()=>{delBlog(id)}}>Delete Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogComp