import React, { Component } from 'react';
import "./Basis.css";
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class Basis extends Component {

    state = { visible: false }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
    return (
        <div>
            <div className="ui pointing menu" id="nav">
                <button onClick={this.toggleVisibility} className="ui circular icon button" role="button" id="circle-button">
                    <i aria-hidden="true" className="align justify icon"></i>
                </button>
                <h1 id="header-text"> moodal </h1>
                <button className="ui circular icon button" role="button" id="circle-button">
                    <i className="user circle icon"></i>
                </button>
            </div>
            <div id="main-size">
                <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='/assets/images/wireframe/paragraph.png' />
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        </div>
    );
  }
}

export default Basis;
