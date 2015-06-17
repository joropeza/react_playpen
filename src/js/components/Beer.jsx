import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default React.createClass({
  getInitialState() {
    return {
      beer: {
        brand: ''
      }};
  },

  componentDidMount() {
  },

  render() {
    let {beer} = this.props;
    return (
      <p>{beer.brand}</p>
    );
  }
});
