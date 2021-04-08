import { combineReducers } from 'redux'
import PostReducer from './PostReducer/PostReducer'

export default combineReducers ({
    posts: PostReducer
})
