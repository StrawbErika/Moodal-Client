import React, { Component } from 'react';
import { Header, Divider, Button } from 'semantic-ui-react';
import ClassroomCards from './ClassroomCards';
import './Classroom.css';

class Classroom extends Component {
    render() {
        return (
            <div id="classroom-size">
                <div id="classroom-header">
                    <Header as="h2">CMSC 100 2nd Sem 2017-18 </Header>
                    <p> Monina Carandang </p>
                </div>
                <Divider />
                <div id="classroom-cards">
                    <ClassroomCards />
                </div>
                <Button
                    className="ui circular icon button"
                    role="button"
                    id="add-post-button"
                >
                    <i className="add icon" />
                </Button>
            </div>
        );
    }
}

export default Classroom;