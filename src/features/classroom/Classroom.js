import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {
    Popup,
    Grid,
    Button,
    Header,
    Divider,
    Menu,
    Segment
} from 'semantic-ui-react';
import ClassroomFeed from '../classroom/ClassroomFeed';
import Students from '../students/Students';
import * as API from '../../api';
import './Classroom.css';
import EditClass from './EditClass';

class Classroom extends Component {
    state = {
        activeItem: 'stream',
        visible: false,
        routes: null,
        id: this.props.match.params._id,
        subject : {}
    };
    
    async componentDidMount() {
        try {
            const { data } = await API.viewClassById(this.props.match.params._id);
            this.setState({ subject : data.data });            
            console.log(data.data)
        } catch(err) {
            console.log(err)
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem, subject } = this.state;
        return (
            <div id="classroom-size">
                <div id="classroom-header">
                    <Header as="h2">{`${subject.title} ${subject.section}`}</Header>
                    <p>{subject.name}</p>
                    <EditClass classId={this.props.match.params._id}/>
                </div>
                <Divider />
                <Menu attached="top" tabular id="classroom-buttons">
                    <Menu.Item
                        name="stream"
                        active={activeItem === 'stream'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="students"
                        active={activeItem === 'students'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Segment attached="bottom" id="classroom-segment">
                    {
                        activeItem === 'stream' ?
                            <ClassroomFeed classId={this.props.match.params._id} />
                        :   <Students classId={this.props.match.params._id} />
                    }
                </Segment>
            </div>
        );
    }
}

export default Classroom;
