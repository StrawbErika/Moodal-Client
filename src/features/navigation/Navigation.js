import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Icon, Input } from 'semantic-ui-react';
import AddClass from '../classroom/AddClass';
import Routes from '../routes/Routes';
import './Navigation.css';

class Navigation extends Component {
    state = { visible: false };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;

        return (
            <div>
                <div className="ui pointing menu" id="nav">
                    <Button
                        onClick={this.toggleVisibility}
                        className="ui circular icon button"
                        role="button"
                        id="left-button"
                    >
                        <i aria-hidden="true" className="align justify icon" />
                    </Button>
                    <h1 id="header-text"> moodal </h1>
                    <AddClass />
                    <Button
                        className="ui circular icon button"
                        role="button"
                        id="right-button"
                    >
                        <i className="user circle icon" />
                    </Button>
                </div>
                <div id="main-size">
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            width="thin"
                            visible={visible}
                            icon="labeled"
                            vertical
                            inverted
                            id="side-bar"
                        >
                            <Menu.Item>
                                <Input placeholder="Search" id="search" />
                            </Menu.Item>
                            <Menu.Item name="Email">
                                <Icon name="mail outline" />
                                Email
                            </Menu.Item>
                            <Menu.Item name="Class 1">
                                <Icon name="circle thin" />
                                Class 1
                            </Menu.Item>
                            <Menu.Item name="Class 2">
                                <Icon name="circle thin" />
                                Class 2
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Routes />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </div>
        );
    }
}

export default Navigation;
