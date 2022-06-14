import React, {useEffect, useContext, Fragment} from 'react'
import BlogContext from './BlogContext'

function Blogcomments() {
    const blogContext = useContext(BlogContext)

    const {comments, getComments} = blogContext 

    useEffect(() => {
        getComments()
       
    })
  return (
      <Fragment>
    <div>
    {comments.map(comment => (
          <h3 key={comment.id}>
           {comment.id}<br/>
          {comment.name}<br/>
          {comment.email}
          {comment.body}
          </h3>
      ))}
     </div>
     </Fragment>
  )
}

export default Blogcomments