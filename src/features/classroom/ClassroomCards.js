import React, { Component } from 'react';
import { Input, Card, Button, Popup, Grid } from 'semantic-ui-react';
import * as API from '../../api';
import './Classroom.css';
import 'semantic-ui-css/semantic.min.css';
import EditPost from './EditPosts';
import DeletePost from './DeletePost';

class ClassroomCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    API.viewPosts(this.props.match.params._id)
      .then(response => {
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const description = [
      'Amy is a violinist with 2 years experience in the wedding industry.',
      'She enjoys the outdoors and currently resides in upstate New York.'
    ].join(' ');

    return (
      <Card id="classroom-card-size">
        <Card.Content
          header={
            <div>
              <span>
                Monina Carandang
                <Popup
                  trigger={
                    <Button floated="right" role="button" id="trash-button">
                      <i className="settings icon" />
                    </Button>
                  }
                  flowing
                  hoverable>
                  <Grid>
                    <Grid.Row>
                      <EditPost />
                      <DeletePost />
                    </Grid.Row>
                  </Grid>
                </Popup>
              </span>
              <Card.Meta>April 25</Card.Meta>
            </div>
          }
        />
        <Card.Content description={description} />
        <Card.Content extra id="comment-segment">
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Add a comment"
              type="submit"
              value={this.state.value}
              onChange={this.handleChange}
              id="comment-input"
            />
          </form>
        </Card.Content>
      </Card>
    );
  }
}

export default ClassroomCards;
