import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../classroom/Classroom.css';
import './DeleteStudent';
import './AddStudent';
import DeleteStudent from './DeleteStudent';
import AddStudent from './AddStudent';
import * as API from '../../api';


class Students extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        };
    }

    async componentDidMount() {
        try {
            const { data } = await API.viewAllStudents(this.props.classId)
            this.setState({ students : data.data.students })
            // console.log(data.data)
        } catch(err) {
            console.log(err)
        }
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
                        <DeleteStudent classId={this.props.classId}/>
                    </Segment>
                ))}
                <AddStudent classId={this.props.classId}/>
            </div>
        );
    }
}

export default Students;
