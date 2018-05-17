import React, { Component } from 'react';
import { Button, Icon, Header, Modal } from 'semantic-ui-react';
import * as API from '../../api';
import '../navigation/Navigation.css';

class DeleteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      classId : this.props.classId
    };
  }

  open = () => this.setState({ open: true });

  close = () => {
    //reset to initial values
    this.setState({
      open: false
    });
  };

  handleDelete = () => {
    const { classId } = this.state;
    console.log(classId);
    API.deleteClass(classId)
      .then(response => {
        console.log(response.data.message)
      }).catch (error => {
        console.log(error)
      })
    this.close();
  }

  render() {
    return (
        <Modal 
            id = "modal-block"
            open={this.state.open}
            onOpen={this.open}
            trigger={
                <Button 
                icon="delete" floated="left" basic circular>
                </Button>
            } 
            basic size='small'>
        <Header icon='trash' content='Delete Class' />
        <Modal.Content>
          <p>Would you like to delete this class?</p>
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

export default DeleteClass;
