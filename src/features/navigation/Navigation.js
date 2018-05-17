import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Icon, Input } from 'semantic-ui-react';
import AddClass from '../classroom/AddClass';
import Routes from '../routes/Routes';
import './Navigation.css';

const sideItems = [
    { key: 1, iName: 'CMSC 100', route: '/classroom/classroomFeed' },
    { key: 2, iName: 'CMSC 125', route: '/classroom/classroomFeed' },
    { key: 3, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 4, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 5, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 6, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 7, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 8, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 9, iName: 'CMSC 11', route: '/classroom/classroomFeed' },
    { key: 10, iName: 'CMSC 100', route: '/classroom/classroomFeed' },
    { key: 11, iName: 'CMSC 100', route: '/classroom/classroomFeed' },
    { key: 12, iName: 'CMSC 125', route: '/classroom/classroomFeed' },
    { key: 13, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 14, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 15, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 16, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 17, iName: 'CMSC 140', route: '/classroom/classroomFeed' },
    { key: 18, iName: 'CMSC 140', route: '/classroom/classroomFeed' }

];

class Navigation extends Component {
    state = { visible: false, routes: null};
    toggleVisibility = (e) => {
        e.stopPropagation();
        this.setState({ visible: !this.state.visible});
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    close = () => {
      this.setState({
        visible: false
      });
    };

    componentDidMount(){
        window.onclick = (e) => {
            // peter bernard so cute :* 
            if(this.state.visible){
                const sidebar =  document.getElementById("side-bar");
                const side = sidebar.getBoundingClientRect();
                const width =  side.right;
                if(e.clientX > width){
                    this.close();
                }
            } 
        }
    }
    
    render() {
        const { visible } = this.state;
        const { activeItem } = this.state;
        return (
            <div className="navigation-main">
                <div className="ui pointing menu" id="nav">
                    <Button
                        onClick={this.toggleVisibility}
                        className="ui circular icon button"
                        role="button"
                        id="left-button"
                    >
                        <i aria-hidden="true" className="align justify icon" />
                    </Button>
                    <Button id="header-button" as={Link} to="/">
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
                    <Sidebar.Pushable as={Segment} id="parent">
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
                        <Sidebar.Pusher id="child" className="main-section">
                            <Routes/>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </div>
        );
    }
}

export default Navigation;
