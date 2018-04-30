import React, { Component } from 'react';
import {Button, Popup } from 'semantic-ui-react';
import ClassroomCards from './ClassroomCards';
import './Classroom.css';

class ClassroomFeed extends Component {

    render() {
        return (
            <div>
                <div id="classroom-cards">
                <ClassroomCards/>
                </div>
                <Popup
                    trigger={
                        <Button
                            className="ui circular icon button"
                            role="button"
                            id="add-post-button"
                            >
                            <i className="add icon" />
                        </Button>
                    }
                    content="Add a post here"
                />
            </div>
        );
    }
}

export default ClassroomFeed;
