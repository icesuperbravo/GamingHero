import React, {Component} from 'react'
import {Icon, Menu, Button} from 'semantic-ui-react'

export class Header extends Component {
    state = {activeItem: 'gamesite'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu icon size="huge" >
                    <Menu.Item
                        name='gamesite'
                        active={activeItem === 'gamesite'}
                        onClick={this.handleItemClick}

                    >
                        <Icon name='gamepad' />
                        <p> Gamesite</p>
                    </Menu.Item>

                    {/*<Menu.Item*/}
                        {/*name='reviews'*/}
                        {/*active={activeItem === 'reviews'}*/}
                        {/*onClick={this.handleItemClick}*/}
                    {/*>*/}
                        {/*Reviews*/}
                    {/*</Menu.Item>*/}

                    {/*<Menu.Item*/}
                        {/*name='upcomingEvents'*/}
                        {/*active={activeItem === 'upcomingEvents'}*/}
                        {/*onClick={this.handleItemClick}*/}
                    {/*>*/}
                        {/*Upcoming Events*/}
                    {/*</Menu.Item>*/}

                    <Menu.Menu position='right'>
                        {/*<Dropdown item text='Language'>*/}
                            {/*<Dropdown.Menu>*/}
                                {/*<Dropdown.Item>English</Dropdown.Item>*/}
                                {/*<Dropdown.Item>Russian</Dropdown.Item>*/}
                                {/*<Dropdown.Item>Spanish</Dropdown.Item>*/}
                            {/*</Dropdown.Menu>*/}
                        {/*</Dropdown>*/}

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </div>
        );
    }
}
