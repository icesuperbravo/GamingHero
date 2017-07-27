import React, {Component} from 'react'
import {Icon, Menu, Button, Input ,Segment, Divider} from 'semantic-ui-react'

export class Header extends Component {
    state = {activeItem: 'gamesite'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div className="asideNav">
                <Menu className="navBar" secondary vertical>
                    <Menu.Item header
                               name='gamesite'
                               active={activeItem === 'gamesite'}
                               onClick={this.handleItemClick}
                    >
                        <Icon name='gamepad' color={"orange"} size="large"/>
                        Gamesite
                    </Menu.Item>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >
                        About
                    </Menu.Item>
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                    >
                        Profile
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search mail...'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Segment padded>
                            <Button primary fluid>Login</Button>
                            <Divider horizontal>Or</Divider>
                            <Button secondary fluid>Sign Up Now</Button>
                        </Segment>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
