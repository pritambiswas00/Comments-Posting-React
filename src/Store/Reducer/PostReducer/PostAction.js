import {FETCH_POST, NEW_POST} from '../../Actions/Types'


 export  const postAction =  () => {
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            return response.json();
        }).then(posts => dispatch({
            type : FETCH_POST,
            payload : posts
        }))
        .catch(error => console.log(error))
    }
}
export const createPost = (postData) => {
    console.log('Create Post')
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(response => response.json()).then(post => dispatch({
            type: NEW_POST,
            payload: post
        })).catch(error => {
            console.log(error)
        })
    }
}
