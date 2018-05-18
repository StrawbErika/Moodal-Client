import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form } from 'semantic-ui-react';
import '../navigation/Navigation.css';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = (e, { data }) => {
    const state = this.state;
    state[e.target.name] = data.value;
    this.setState(state);
  };

  open = () => this.setState({ open: true });

  close = () => {
    //reset to initial values
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Modal
        id="modal-block"
        open={this.state.open}
        onOpen={this.open}
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
        <Header icon="add circle" content="Add a student" />
        <Modal.Content>
          <Form>
            <Form.Input id="add-input" placeholder="Name" />
            <Form.Input id="add-input" placeholder="Student number" />
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

export default AddStudent;