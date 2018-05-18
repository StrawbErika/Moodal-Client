import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

const inline = {
  marginTop: '300px',
  marginLeft: '500px'
};

class AddModal extends Component {
  render() {
    return (
      <Modal
        header="Send Mail"
        style={inline}
        trigger={<Button positive content="Send Mail" />}>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Recipient"
              name="recipient"
              Placeholder="abc@def.gh"
            />
            <Form.Input
              label="Content"
              name="content"
              Placeholder="Content Here"
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddModal;
