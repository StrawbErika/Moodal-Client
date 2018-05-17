import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Popup, Grid, Button, Header, Divider, Menu, Segment} from 'semantic-ui-react';
import ClassroomFeed from '../classroom/ClassroomFeed';
import Students from '../students/Students';
import './Classroom.css';

class Classroom extends Component {
    state = {activeItem: 'stream', visible: false, routes: null };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div id="classroom-size">
                <div id="classroom-header">
                    <Header as="h2">CMSC 100 2nd Sem 2017-18 </Header>
                    <p> Monina Carandang </p>
                    <Popup
                        trigger={
                            <Button
                            floated='right'
                            role="button"
                            id="edit-button">
                            Edit Classroom
                        </Button>
                        }
                        flowing
                        hoverable
                    >
                        <Grid>
                        <Grid.Column>
                                                        
                        <Grid.Row>
                            <Button>
                            Students can post & comment
                            </Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Button>
                            Students can only comment
                            </Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Button>
                            Students can do none
                            </Button>
                        </Grid.Row>
                        </Grid.Column>
                        </Grid>
                    </Popup>
    

                </div>
                <Divider />
                <Menu attached='top' tabular id="classroom-buttons">
                    <Menu.Item 
                        name='stream' 
                        active={activeItem === 'stream'} 
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/classroom/classroomFeed"/>
                    <Menu.Item 
                        name='students' 
                        active={activeItem === 'students'} 
                        onClick={this.handleItemClick} 
                        as={Link}
                        to="/classroom/students"/>
                </Menu>

                <Segment attached='bottom' id="classroom-segment">
					<Route exact path={`/classroom/${this.props.location.pathname}`} component={ClassroomFeed} />
					<Route exact path="/classroom/students" component={Students} />
                </Segment>

            </div>
        );
    }
}

export default Classroom;
