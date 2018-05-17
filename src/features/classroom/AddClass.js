import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form } from 'semantic-ui-react';
import '../navigation/Navigation.css';

class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  open = () => this.setState({ open: true });

  close = () => {
    //reset to initial values
    this.setState({
      open: false
    });
  };

  handleChange = (e, { data }) => {
    const state = this.state;
    state[e.target.name] = data.value;
    this.setState(state);
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
            id="add-button"
          >
            <i className="add icon" />
          </Button>
        }
      >
        <Header icon="add circle" content="Create Class" />
        <Modal.Content>
          <Form>
            <Form.Input id="add-input" name='title' onChange={this.handleChange} placeholder="Class title" />
            <Form.Input id="add-input" name='section' onChange={this.handleChange} placeholder="Section" />
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

export default AddClass;
