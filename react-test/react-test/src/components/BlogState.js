import React, {useReducer} from "react";
import axios from 'axios'
import BlogContext from "./BlogContext";
import BlogReducer from './BlogReducer';
import {
    OUTPUT_COMMENTS,
    OUTPUT_POSTS,
    POSTS_ERROR
} from './type'

const BlogState = props => {
    const initialState = {
        posts : [],
        comments : []
    }

const [state, dispatch] = useReducer(BlogReducer, initialState);

const getPosts = async () => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({
            type : OUTPUT_POSTS,
            payload : res.data
        });
    }catch(err){
        dispatch({
            type : POSTS_ERROR,
            payload : err.response.msg
        })
    }
}

const getComments = async () => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');

        dispatch({
            type : OUTPUT_COMMENTS,
            payload : res.data
        });
    }catch(err){
        dispatch({
            type : POSTS_ERROR,
            payload : err.response.msg
        })
    }
}

return(
    <BlogContext.Provider
     value={{
         posts : state.posts,
         comments : state.comments,
         getPosts,
         getComments
     }}
    >
        {props.children}
    </BlogContext.Provider>
)
}

export default BlogState
