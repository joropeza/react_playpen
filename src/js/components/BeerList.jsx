import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Beer from './Beer.jsx';


export default React.createClass({
  getDefaultProps() {
    return {
      tasks: [{brand:'Coors'},{brand:'Sierra Nevada'},{brand:'21st Ammendment'}]
    };
  },

  componentDidMount() {
  },

  render() {
    let {tasks} = this.props;
    return (
      <ListGroup>
          {tasks.map(beer =>
            <Beer beer={beer} />
          )}
        </ListGroup>
    );
  }
});
