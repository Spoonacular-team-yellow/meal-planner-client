import React from "react";
import Card from "react-bootstrap/Card";

class RecipeCard extends React.Component {


    render(){

        return (

        <Card style={{ width: "18rem" }} className="m-1 d-inline-block">
            <Card.Img
              // variant="top"
              // src={this.props.src}
              // className="h-50"
              // onClick={this.handleFavorites}
            />
            <Card.Body>
              <Card.Title>
                  {/* {this.props.title} */}
                  </Card.Title>
              <Card.Text>
                  {/* {this.state.desc} */}
                  </Card.Text>
            </Card.Body>
        </Card>
        );
    };
};

export default RecipeCard;