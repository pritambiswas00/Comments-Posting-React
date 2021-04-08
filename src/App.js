
import React from 'react'
import Post from './Components/Post/Post'
import PostForm from './Components/Post/PostForm'
import { Provider } from 'react-redux'
import Store from './Store/Store'



function App() {

  return (
    <Provider store={Store}>
    <div style={{textAlign: 'center'}}>
        <PostForm/>
        <hr/>
        <Post/>
    </div>
    </Provider>

  );
}

export default App;
