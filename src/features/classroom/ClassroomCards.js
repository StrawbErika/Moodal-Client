import React, { Component } from 'react';
import './Classroom.css';
import 'semantic-ui-css/semantic.min.css';
import { Input, Card, Button, Popup, Grid} from 'semantic-ui-react';

class ClassroomCards extends Component {
    render() {
        const description = [
            'Amy is a violinist with 2 years experience in the wedding industry.',
            'She enjoys the outdoors and currently resides in upstate New York.'
        ].join(' ');
        return (
            <Card id="classroom-card-size">
                <Card.Content
                    header={
                        <div>
                            <span>Monina Carandang
                            <Popup
                                    trigger={
                                        <Button
                                        floated='right'
                                        role="button"
                                        id="trash-button">
                                        <i className="settings icon" />
                                        </Button>
                                    }
                                    flowing
                                    hoverable
                                >
                                    <Grid>
                                    <Grid.Row>
                                        <Button
                                            floated='right'
                                            role="button"
                                            id="trash-button">
                                            <i className="edit icon" />
                                        </Button>
                                        <Button
                                            floated='right'
                                            role="button"
                                            id="trash-button">
                                            <i className="trash icon" />
                                        </Button>
                                    </Grid.Row>
                                    </Grid>
                                </Popup>
                            </span>
                            <Card.Meta>April 25</Card.Meta>
                            
                        </div>
                    }
                />
                <Card.Content description={description} />
                <Card.Content extra id="comment-segment">
                    <Input placeholder="Add a comment" id="comment-input" />
                </Card.Content>
            </Card>
        );
    }
}

export default ClassroomCards;
