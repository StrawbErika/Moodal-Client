import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form } from 'semantic-ui-react';
import '../navigation/Navigation.css';
import * as api from "../../api";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      author: JSON.parse(localStorage.getItem('login')).email,
      content: " ",
      timestamp: new Date(),
      comments: [], 
      classId: this.props.classId,
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
      classId: "",
    });
  };

  handleChange = (e,  data ) => {
    const state = this.state;
    state[e.target.name] = data.value;
    this.setState(state);
  }
  
  handleSubmit = async (event) =>{
    const {author, content, timestamp, comments, classId} = this.state;
    
    try {
      console.log(this.state)
      const { data } = await api.addPost(this.state);

      console.log(data.message);
      this.close();
    } catch(err) {
      console.log(err);
    }

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
                className="ui circular icon button"
                role="button"
                id="add-post-button"
                >
                <i className="add icon" />
            </Button>
        }
      >
        <Header icon="add circle" content="Post" />
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

export default AddPost;
