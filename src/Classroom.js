import React, { Component } from 'react';
import "./Classroom.css";
import 'semantic-ui-css/semantic.min.css';
import {Input, Icon, Card, Image, Header, Segment, Divider, Button} from 'semantic-ui-react'
import ClassroomCards from './ClassroomCards';

class Classroom extends Component {

    render() {
        return (
            <div id="classroom-size">
                <div id = "classroom-header">
                    <Header as='h2'>CMSC 100 2nd Sem 2017-18 </Header>
                    <p> Monina Carndang </p>
                </div>
                <Divider/>
                <div id="classroom-cards">
                    <ClassroomCards/>
                </div>
                <Button className="ui circular icon button" role="button" id="add-post-button">
                    <i className="add icon"></i>
                </Button>
            </div>
        );
    }
}

export default Classroom;
