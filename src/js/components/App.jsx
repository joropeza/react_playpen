import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';
import BeerList from './BeerList.jsx';

export default React.createClass({
  propTypes: {
    beers: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      beers: [{brand:'Bud'},{brand:'Sierra'}]
    }
  },

  render() {
    let {onAddTask, onClear, beers} = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Flux Jumbotron</h1>
          <p>
            This is a flux component.
          </p>
        </Jumbotron>

        <BeerList beers={beers}/>

        <Button onClick={onAddTask} bsStyle="primary">Add New</Button>
        <Button onClick={onClear} bsStyle="danger">Clear List</Button>
      </div>
    );
  }
});
