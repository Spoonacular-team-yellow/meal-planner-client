import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Search.css';

class Search extends React.Component {
 
  render() {

    return (
      <>
        <Form className='border' onSubmit={this.props.getRecipe} onChange={this.props.ingredientHandler}>
          <Form.Group>
            <Form.Label className='srch'>Enter Ingredients</Form.Label>
            <div className="d-flex">
              <Form.Control className='m-1' type='text' placeholder='Ex. Eggs' name="ing1"/>
              <Form.Control className='m-1' type='text' placeholder='Ex. Bacon' name="ing2"/>
              <Form.Control className='m-1' type='text' placeholder='Ex. Cheese' name="ing3"/>
            </div>
          </Form.Group>
          <Button id='button' className='mt-2 button' type="submit">
            Search
          </Button>
        </Form>
      </>
    );
  }
}

export default Search;
