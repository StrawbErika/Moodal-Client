import React, { Component } from 'react';
import "./Classroom.css";
import 'semantic-ui-css/semantic.min.css';
import {Input, Icon, Card, Image} from 'semantic-ui-react'

class Classroom extends Component {

    render() {
        const description = [
            'Amy is a violinist with 2 years experience in the wedding industry.',
            'She enjoys the outdoors and currently resides in upstate New York.',
          ].join(' ')
        return (
            <div id="classroom-size">
                <Card id = "classroom-card-size">
                    <Card.Content header={
                        <div>
                          <span>Monina Carandang</span>
                          <Card.Meta>April 25</Card.Meta>
                          </div>
                    } />
                        <Card.Content description={description} />
                        <Card.Content extra id="comment-segment">
                        <Input placeholder='Add a comment' id="comment-input"/>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Classroom;
