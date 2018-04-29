import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Divider, Button, Menu, Segment, Popup } from 'semantic-ui-react';

class Students extends Component {
    state = {activeItem: 'students', visible: false, routes: null };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div id="classroom-size">
                <div id="classroom-header">
                    <Header as="h2">CMSC 100 2nd Sem 2017-18 </Header>
                    <p> Monina Carandang </p>
                </div>
                <Divider />

                <Menu attached='top' tabular id="classroom-buttons">
                    <Menu.Item 
                        name='stream' 
                        active={activeItem === 'stream'} 
                        onClick={this.handleItemClick} 
                        as={Link}
                        to="/classroom"/>
                    <Menu.Item 
                        name='students' 
                        active={activeItem === 'students'} 
                        onClick={this.handleItemClick}/>
                </Menu>

                <Segment attached='bottom' id="classroom-segment">
                    <div id="classroom-cards">
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
                        content="Add a student here"
                    />
                    
                </Segment>

            </div>
        );
    }
}

export default Students;
