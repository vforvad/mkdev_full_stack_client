import React, { Component, PropTypes } from 'react';

export default class PostItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  static defaultProps = {
    description: ''
  };

  render() {
    const { id, name, description } = this.props;

    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    );
  }
}
