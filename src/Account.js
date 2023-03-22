import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button } from "react-bootstrap";

class Account extends React.Component {

  render() {
    console.log(this.props.data)
    return (
      <>
        {
          this.props.doesUserExist &&
          <>
            <Card style={{ width: "18rem" }} className="m-1 d-inline-block">
              <Card.Img
              // variant="top"
              // src={this.props.src}
              // className="h-50"
              // onClick={this.handleFavorites}
              />
              <Card.Body>
                <Card.Title>
                  {this.props.data}
                </Card.Title>
                <Card.Text>
                  {/* {this.state.desc} */}
                </Card.Text>
                <Button>Customize</Button>
              </Card.Body>
            </Card>
          </>
        }
      </>
    );
  }
}
export default withAuth0(Account);
