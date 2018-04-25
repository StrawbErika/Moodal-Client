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
          <Header
            icon="add circle"
            content="Create Class"
          />
          <Modal.Content>
            <Form>
              <Form.Input
                id="add-input"
                placeholder="Class name"
              />

              <Form.Input
                id="add-input"
                placeholder="Section"
              />

              <Form.Input
                id="add-input"
                placeholder="Subject"
              />

            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button
              floated="left"
              basic
              color='green'
              animated
              onClick={this.handleSubmit}
            >
              <Button.Content visible> Submit </Button.Content>
              <Button.Content hidden> <Icon name="checkmark" /> </Button.Content>
            </Button>
            <Button
              basic color="red"
              animated
              onClick={this.close}
            >
              <Button.Content visible> Cancel </Button.Content>
              <Button.Content hidden> <Icon name="remove" /> </Button.Content>
            </Button>
          </Modal.Actions>
        </Modal>
    );
  }

}

export default AddClass;