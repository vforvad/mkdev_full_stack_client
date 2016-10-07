import React, { Component, PropTypes } from 'react';

import PostItem from 'Post/Item/PostItem';

export default class Post extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((item) => {
          return <PostItem key={item.id} id={item.id} name={item.name} description={item.description} />;
        })}
      </div>
    );
  }
}
