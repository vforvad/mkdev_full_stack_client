import React, { Component } from 'react';

import Post from 'Post/Post';
import PostForm from 'Post/Form/PostForm';

const data = [
  { id: 1, name: 'Name 1', description: 'Description 1' },
  { id: 2, name: 'Name 2', description: 'Description 2' },
  { id: 3, name: 'Name 3', description: 'Description 3' }
];

export default class App extends Component {

  render() {
    return (
      <div>
        <Post data={data} />
        <PostForm />
      </div>
    );
  }
}
