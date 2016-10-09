import React, { Component, PropTypes } from 'react';

export default class PostItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    username: PropTypes.string.isRequired
  };

  static defaultProps = {
    description: ''
  };

  render() {
    const { id, name, description, username } = this.props;

    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>{username}</p>
      </div>
    );
  }
}
