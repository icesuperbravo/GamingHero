import React from "react";
import {Button} from 'semantic-ui-react'
import { Input, Menu } from 'semantic-ui-react'

export class Home extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                {/*<Menu secondary>*/}
                {/*<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />*/}
                {/*<Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />*/}
                {/*<Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />*/}
                {/*<Menu.Menu position='right'>*/}
                {/*<Menu.Item>*/}
                {/*<Input icon='search' placeholder='Search...' />*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />*/}
                {/*</Menu.Menu>*/}
                {/*</Menu>*/}
            </div>
        );
//Learning Tips: can only be one line!! Can be a string, number or javascript
    }
}