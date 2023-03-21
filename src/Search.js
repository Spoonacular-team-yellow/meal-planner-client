import React from 'react';
import { Form, Button } from 'react-bootstrap';


class Search extends React.Component {

  render() {

    return (
      <>
        <Form>
          <Form.Group
            onSubmit={this.props.getRecipe}
            onChange={this.props.ingredientHandler}
            >
            <Form.Label>Enter Ingredients</Form.Label>
            <Form.Control type='text' placeholder='Ex. Eggs' />
            <Form.Control type='text' placeholder='Ex. Bacon' />
            <Form.Control type='text' placeholder='Ex. Cheese' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </>
    );
  }
}

export default Search;
