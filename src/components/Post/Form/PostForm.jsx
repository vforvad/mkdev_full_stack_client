import React, { Component } from 'react';

import { createPost } from 'actions/post';

export default class PostForm extends Component {

  state = {
    title: '',
    body: '',
    username: ''
  };

  onChange(event) {
    let prevState = this.state;

    prevState[event.target.name] = event.target.value;
    this.setState(prevState);
  }

  submitForm() {
    createPost(this.state)
      .then((post) => {
        alert('Post created');
      })
      .catch((errors) => {
        alert('An error has occured');
      });
  }

  render() {
    const { title, body, username } = this.state;

    return (
      <div>
        <div>
          <input type="text" name="username" value={username}
            onChange={this::this.onChange} placeholder="Username" />
        </div>
        <div>
          <input type="text" name="title" value={title}
            onChange={this::this.onChange} placeholder="Title" />
        </div>
        <div>
          <textarea name="body" onChange={this::this.onChange}
            value={body} placeholder="Body" />
        </div>
        <button onClick={this::this.submitForm}>Save</button>
      </div>
    );
  }
}
