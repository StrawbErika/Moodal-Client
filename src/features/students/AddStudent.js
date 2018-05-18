import React, { Component } from 'react';
import * as API from '../../api';
import { Button, Icon, Header, Modal, Form, Dropdown } from 'semantic-ui-react';
import '../navigation/Navigation.css';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      stud: ''
    };
  }

  async componentDidMount(){
    
    try{
      const {data} = await API.getAllUsers()
      const students = data.data.filter(x => x.userType==="student" && !x.classes.includes(this.props.classId)).map(student => ({
        key: student._id, value: student._id, text: student.name
      }))  
        this.setState({students})
    }catch(err){
      console.log(err)
    }
  }

  handleSubmit = async (e, data)  => {
    try{
      const {data:temp} = await API.viewUser(this.state.stud);
      console.log(temp.data)
      // console.log(this.state)
      const {data} = await API.editStudent(temp.data);
    }catch(err){
    console.log(err)
    }
  }

  handleChange = (e, data ) => {
    // console.log(data)
    const state = this.state;
    state[data.name] = data.value;
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
          <Dropdown placeholder='Select Students' fluid search selection name="stud" onChange = {this.handleChange} options={this.state.students} />
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