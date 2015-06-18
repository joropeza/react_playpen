import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Beer from './Beer.jsx';


export default React.createClass({
  getDefaultProps() {
    return {
      beers: [{brand:'Coors'},{brand:'Sierra Nevada'},{brand:'21st Ammendment'}]
    };
  },

  componentDidMount() {
  },

  render() {
    let {beers} = this.props;
    return (
      <ListGroup>
          {beers.map(beer =>
            <Beer beer={beer} />
          )}
        </ListGroup>
    );
  }
});
