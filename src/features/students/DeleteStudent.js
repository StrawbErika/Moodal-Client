import React, { Component } from 'react';
import { Button, Icon, Header, Modal } from 'semantic-ui-react';
import '../navigation/Navigation.css';

class DeleteStudent extends Component {
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

  render() {
    return (
        <Modal 
            id = "modal-block"
            open={this.state.open}
            onOpen={this.open}
            trigger={
                <Button
                    floated='right'
                    role="button"
                    id="trash-button">
                    <i className="trash icon" />
                </Button>
            } 
            basic size='small'>
        <Header icon='trash' content='Delete Student' />
        <Modal.Content>
          <p>Would you like to remove this student from your list?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={this.handleDelete}>
            <Icon name='checkmark' /> Yes
          </Button>
          <Button basic color='red' inverted onClick={this.close}>
            <Icon name='remove' /> No
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteStudent;
