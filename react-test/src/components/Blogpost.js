import React, {Fragment, useContext, useEffect} from 'react'
import BlogContext from './BlogContext'
import {useParams} from 'react-router-dom'
import Header from './Header'



function Blogpost() {
    const blogContext = useContext(BlogContext)

    const {posts, comments, getComments, getPosts} = blogContext
    

    const {id} = useParams()

    useEffect(() => {
        getPosts();
        getComments();
        
       
    }, [getPosts, getComments])

  return (
    <Fragment>
    <Header/>
    <section className="card">
        <div >
        {posts.filter(blog => blog.id === parseInt(id)).map((blog, index) => (
           <div key={index}>
               <h2>Blog Posts</h2>
               <h3>{blog.title}</h3>
               <h3>{blog.body}</h3>
            </div> 
        ))}

       {comments.filter(comment => comment.id === parseInt(id)).map((comment, index) => (
           <div key={index}>
               <h2>Blog Comments</h2>
               <h3>{comment.body}</h3>
            </div> 
        ))} 
       </div>

     
    </section>
    </Fragment>
  )
}

export default Blogpost