import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../classroom/Classroom.css';
import './DeleteStudent';
import DeleteStudent from './DeleteStudent';
import * as API from '../../api';

class Students extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        };
    }

    componentDidMount(nextProps) {
        console.log(nextProps)
        
        // API.viewAllStudents(this.props.userId)
        //     .then(response => {
        //         this.setState({ students: response.data.data.students });
        //         console.log(this.state.students)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    handleChange = (e, { data }) => {
        const state = this.state;
        state[e.target.name] = data.value;
        this.setState(state);
    };

    render() {
        const { students } = this.state;
        return (
            <div>
                {students.map((student, index) => (
                    <Segment textAlign="left" key={index}>
                        {student}
                        <DeleteStudent />
                    </Segment>
                ))}
            </div>
        );
    }
}

export default Students;
