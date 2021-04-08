import React, { Component } from 'react'
import './PostForm.css'
import Input from '../Input'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {createPost} from '../../Store/Reducer/PostReducer/PostAction'

class PostForm extends Component {
      
    state={
        form:{
            title: {
                inputDetails:{
                    placeholder: 'Title',
                    required : true,
                    type : 'text'
                },
                inputType : 'input',
                 value : '',
    
            },
            body: {
                inputDetails:{
                    placeholder: 'Your Text',
                    required : true,
                    type : 'text'
                },
                inputType : 'textarea',
                 value : '',
    
            }
        }
        
    }
    onChangeHandler = (event, id) => {
      const updatedForm = {
          ...this.state.form
      }
      const  updatedFormElement = updatedForm[id];
      updatedFormElement.value = event.target.value;
      updatedForm[id] = updatedFormElement;
      this.setState({
          form : updatedForm
      })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault();
        const posts = {}
        for(let key in this.state.form){
            posts[key] = this.state.form[key].value
        }
        this.props.createPost(posts)
    }
    

    render() {
        const formData = []
        for (let key in this.state.form){
            formData.push({
                id : key,
                config: this.state.form[key]
            })
        }
        return (
            <div className="PostForm">
                <h1 className="header">Add Post</h1>
                <form onSubmit={(e)=> this.onSubmitHandler(e)}>
                    <div>
                     {formData.map(item => {
                         return <Input key={item.id} config={item.config} changed={(event) => this.onChangeHandler(event, item.id)}/>
                     })}
                     <br/>
                     <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

PostForm.propTypes ={
    createPost : PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
