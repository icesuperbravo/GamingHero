import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, This this the Header</p>
                { 5 > 2 ? "Yes" : "No" }

            </div>
        );
//Learning Tips: can only be one line!! Can be a string, number or javascript
    }
}