import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form, Label} from 'semantic-ui-react'
import "./Navigation.css";



class AddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        }
      }

    open = () => this.setState({ open: true })

    close = () => {
      //reset to initial values
      this.setState({
        open: false
      })
    }
  
    render() {
    return (
        <Modal 
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
            <Button className="ui circular icon button" role="button" id="add-button">
            <i className="add icon"></i>
            </Button>
            }>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    );
  }

}

export default AddClass;