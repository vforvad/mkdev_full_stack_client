import React, { Component } from 'react';

import Post from 'Post/Post';
import PostForm from 'Post/Form/PostForm';

export default class App extends Component {

  render() {
    return (
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
}
