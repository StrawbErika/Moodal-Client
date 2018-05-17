import React, { Component } from 'react';
import {Popup } from 'semantic-ui-react';
import ClassroomCards from './ClassroomCards';
import './Classroom.css';
import AddPost from './AddPost';

class ClassroomFeed extends Component {

    render() {
        return (
            <div>
                <div id="classroom-cards">
                <ClassroomCards/>
                </div>
                <Popup
                    trigger={
                        <AddPost/>
                    }
                    content="Add a post here"
                />
            </div>
        );
    }
}

export default ClassroomFeed;
