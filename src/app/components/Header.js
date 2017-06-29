import React, {Component} from 'react'
import {Icon, Menu, Button, Image, Card, Input} from 'semantic-ui-react'
// import './Header.sass';

export class Header extends Component {
    state = {activeItem: 'gamesite'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        const src = 'app/assets/images/Bingjing-Xu.jpg'

        return (
            <div>
                <Menu className={"NaviHeader"} size="huge" secondary vertical floated>
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
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu>


                <div className="contentPage">
                    <Card.Group itemsPerRow={4} children>
                        <Card
                            image={src}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            //extra={extra}
                        />
                        <Card
                            image={src}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            //extra={extra}
                        />
                        <Card
                            image={src}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            //extra={extra}
                        />
                        <Card
                            image={src}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            //extra={extra}
                        />
                    </Card.Group>
                </div>
            </div>
        );
    }
}
