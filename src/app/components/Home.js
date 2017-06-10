import React from "react";
import {Button} from 'semantic-ui-react'


export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home page</p>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
        );
//Learning Tips: can only be one line!! Can be a string, number or javascript
    }
}