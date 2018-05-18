import React, { Component } from 'react';
import { Button, Icon, Header, Modal, Form } from 'semantic-ui-react';
import '../navigation/Navigation.css';
import * as api from "../../api";

const options = [
	{
		key : 1,
		value : 'post and comment',
		text : 'Students can post and comment'
	},
	{
		key : 2,
		value : 'comment only',
		text : 'Students can comment only'
	},
	{
		key : 3,
		value : 'none',
		text : 'Students can do none'
	}
]


class EditClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  open = () => this.setState({ open: true });
  close = () => {
    this.setState({
      open: false,
      title: "",
      section: "",
      canPost: false,
      canComment: false, 
    });
  };

  handleStudentSettings = (e) => {
      if(e.key == 1){
        this.setState({canPost: true, canComment: true});
      }
      else if(e.key == 2){
        this.setState({canPost: false, canComment: true});
      }
      else if(e.key == 3){
        this.setState({canPost: false, canComment: false});
      }
      
  }

  handleChange = (e,  data ) => {
    const state = this.state;
    state[e.target.name] = data.value;
    this.setState(state);
  }

  handleSubmit =(event) =>{
    const {title, section, canComment, canPost} = this.state;
    api.editClass({classId : this.props.classId, title, section, students:[], posts:[], canPost, canComment})
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
        id="modal-block"
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button
          floated="right"
          role="button"
          id="edit-button"
          >
          Edit Classroom
          </Button>
        }
      >
        <Header icon="edit circle" content="Edit Class" />
        <Modal.Content>
          <Form>
            <Form.Input
              id="add-input"
              name="title"
              onChange={this.handleChange}
              placeholder="Class title"
            />
            <Form.Input
              id="add-input"
              name="section"
              onChange={this.handleChange}
              placeholder="Section"
            />
          </Form>
          <Form.Select 
            label='Student settings' 
            placeholder='Select student settings' 
            options={options} 
            onChange={this.handleChange} 
            name='studentSettings' 
            fluid
            />

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

export default EditClass;
