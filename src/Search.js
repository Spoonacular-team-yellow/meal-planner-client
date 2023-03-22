import React from 'react';
import { Form, Button } from 'react-bootstrap';


class Search extends React.Component {
 
  render() {

    return (
      <>
        <Form onSubmit={this.props.getRecipe} onChange={this.props.ingredientHandler}>
          <Form.Group>
            <Form.Label>Enter Ingredients</Form.Label>
            <Form.Control type='text' placeholder='Ex. Eggs' name="ing1"/>
            <Form.Control type='text' placeholder='Ex. Bacon' name="ing2"/>
            <Form.Control type='text' placeholder='Ex. Cheese' name="ing3"/>
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
