import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {postAction} from '../../Store/Reducer/PostReducer/PostAction'
import './Post.css'

 class Post extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.postAction();
    }

componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
    }
}
    render() {
        const fetchedPosts  = this.props.posts.map(item => {
            return (
                <div  key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            )
        })
        return (
            <div className="Post">
                <h1>Posts</h1>
                 {fetchedPosts}
            </div>
        )
    }
}
Post.prototypes = {
    postAction : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
      return {
          posts : state.posts.items,
          newPost: state.posts.item
      }
}
export default connect(mapStateToProps, {postAction})(Post);


