import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../classroom/Classroom.css';
import './DeleteStudent';
import DeleteStudent from './DeleteStudent';
import AddStudent from './AddStudent';

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
                <AddStudent/>
            </div>
        );
    }
}

export default Students;
