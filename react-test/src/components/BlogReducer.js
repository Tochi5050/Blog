import {
    OUTPUT_COMMENTS,
    OUTPUT_POSTS
} from './type';

const BlogReducer = (state, action) => {
    switch (action.type) {
        case OUTPUT_POSTS:
            return{
                ...state,
                posts : action.payload
            }
        case OUTPUT_COMMENTS:
                return{
                    ...state,
                    comments : action.payload
                }
        default:
            return state;
        
    }
}

export default BlogReducer