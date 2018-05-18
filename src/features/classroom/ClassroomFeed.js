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
                <ClassroomCards classId={this.props.classId} />
                </div>
                <Popup
                    trigger={
                        <AddPost classId={this.props.classId} />
                    }
                    content="Add a post here"
                />
            </div>
        );
    }
}

export default ClassroomFeed;
