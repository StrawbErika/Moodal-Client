import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Icon, Input } from 'semantic-ui-react';
import AddClass from '../classroom/AddClass';
import Routes from '../routes/Routes';
import './Navigation.css';

const sideItems = [
    { key: 1, iName: 'CMSC 100', route: '/classroom' },
    { key: 2, iName: 'CMSC 125', route: '/classroom' },
    { key: 3, iName: 'CMSC 140', route: '/classroom' },
    { key: 4, iName: 'CMSC 11', route: '/classroom' }
];

class Navigation extends Component {

    state = { visible: false, routes: null };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { visible } = this.state;
        const { activeItem } = this.state
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
                    <Button id="header-button" as={Link} to='/'>
                       <h1 id="header-text"> moodal </h1>
                    </Button>
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
                         
                            {sideItems.map((items, index) => (
                                <Menu.Item 
                                    name={items.iName}
                                    active={activeItem === items.iName}
                                    onClick={this.handleItemClick}
                                    as={Link}
                                    to={items.route}
                                    key={index}
                                    >
                                <Icon name="circle thin" />
                                {items.iName}
                                </Menu.Item>
                                
                            ))}
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Routes/>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </div>
        );
    }
}

export default Navigation;
