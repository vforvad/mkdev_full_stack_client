import React, { Component, PropTypes } from 'react';

import {  getPosts } from 'actions/post';

import PostItem from 'Post/Item/PostItem';

export default class Post extends Component {

  state = {
    posts: []
  };

  componentWillMount() {
    getPosts().then((posts) => {
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((item) => {
          return <PostItem key={item.id} id={item.id} name={item.title} description={item.body} username={item.username} />;
        })}
      </div>
    );
  }
}
