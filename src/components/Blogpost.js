import React, {Fragment, useContext, useEffect} from 'react'
import BlogContext from './BlogContext'



function Blogpost() {
    const blogContext = useContext(BlogContext)

    const {posts,  getPosts} = blogContext

    

    useEffect(() => {
        getPosts()
       
    })

  return (
    <Fragment>
        <div>
        {posts.map(blog => (
           <h3 className='blog' key={blog.id}>
               {blog.id}<br/>
               {blog.title}
               {blog.body}
            </h3> 
        ))}
       </div>

     
    </Fragment>
  )
}

export default Blogpost