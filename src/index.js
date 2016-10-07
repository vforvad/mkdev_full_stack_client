import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App/App';
import Post from 'Post/Post';
import PostForm from 'Post/Form/PostForm';

ReactDOM.render(<App> <Post /><PostForm /> </App>, document.getElementById('app'));
