import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form } from 'semantic-ui-react';
import '../navigation/Navigation.css';
import * as api from "../../api";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      author: " ",
      content: " ",
      timestamp: " ",
      comments: [], 
      classId: " ",
    };
  }
  
  open = () => this.setState({ open: true });
  
  close = () => {
    this.setState({
      open: false,
      author: "",
      content: "",
      timestamp: "",
      comments: [], 
      propsId: "",
    });
  };

  handleChange = (e,  data ) => {
    const state = this.state;
    state[e.target.name] = data.value;
    this.setState(state);
  }
  
  handleSubmit =(event) =>{
    const {author, content, timestamp, comments, propsId} = this.state;
    console.log(this.props);  
    api.editPost(this.props. _id, {author, content, timestamp, comments})
    .then(result => {
      alert(result.data.message);
    }).catch(error => {
      alert(error);
    })
    this.close();
  }

  render() {
    return (
      <Modal
        id = "modal-block"
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
            <Button
                floated='right'
                role="button"
                id="trash-button">
                <i className="edit icon" />
            </Button>
        }
      >
        <Header icon="edit circle" content="Edit Post" />
        <Modal.Content>
          <Form>
            <Form.Input id="add-input" name='content' onChange={this.handleChange} placeholder="Share with your class" />
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button
            floated="left"
            basic
            color="green"
            animated
            onClick={this.handleSubmit}
          >
            <Button.Content visible> Submit </Button.Content>
            <Button.Content hidden>
              {' '}
              <Icon name="checkmark" />{' '}
            </Button.Content>
          </Button>
          <Button basic color="red" animated onClick={this.close}>
            <Button.Content visible> Cancel </Button.Content>
            <Button.Content hidden>
              {' '}
              <Icon name="remove" />{' '}
            </Button.Content>
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditPost;
