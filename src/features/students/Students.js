import React, { Component } from 'react';
import { Button, Segment, Popup } from 'semantic-ui-react';
import '../classroom/Classroom.css';
import './DeleteStudent';
import DeleteStudent from './DeleteStudent';

const students = [
	{ key: 1, name: "Erika Louise A. Nepomuceno" },
	{ key: 2, name: "Erika Louise A. Nepomuceno" },
	{ key: 3, name: "Erika Louise A. Nepomuceno" },
	{ key: 4, name: "Erika Louise A. Nepomuceno" }
];

class Students extends Component {
    render() {
        return (
            <div>
                {students.map((student, index) => (
                    <Segment textAlign='left'key={index}>
                        {student.name}
                        <DeleteStudent/>
                    </Segment>
                ))}
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
                    content="Add a student here"
                />
            </div>
        );
    }
}

export default Students;
