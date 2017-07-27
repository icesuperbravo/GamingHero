import React from "react";
import {Card} from 'semantic-ui-react'


export class Home extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        const src = 'app/assets/images/Bingjing-Xu.jpg'
        return (
            <div className="mainContent">
                {/*<div className="contentPage masonry">*/}
                    {/*<div className= "column" >*/}
                        {/*<Card className="carditem"*/}
                            {/*image={src}*/}
                            {/*header='Elliot Baker'*/}
                            {/*meta='Friend'*/}
                            {/*description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'*/}
                            {/*//extra={extra}*/}
                        {/*/>*/}
                        {/*<Card className="carditem"*/}
                            {/*image={src}*/}
                            {/*header='Elliot Baker'*/}
                            {/*meta='Friend'*/}
                            {/*description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'*/}
                            {/*//extra={extra}*/}
                        {/*/>*/}
                        {/*<Card className="carditem"*/}
                            {/*image={src}*/}
                            {/*header='Elliot Baker'*/}
                            {/*meta='Friend'*/}
                            {/*description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'*/}
                            {/*//extra={extra}*/}
                        {/*/>*/}
                        {/*<Card className="carditem"*/}
                            {/*image={src}*/}
                            {/*header='Elliot Baker'*/}
                            {/*meta='Friend'*/}
                            {/*description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'*/}
                            {/*//extra={extra}*/}
                        {/*/>*/}
                        {/*<Card className="carditem"*/}
                            {/*image={src}*/}
                            {/*header='Elliot Baker'*/}
                            {/*meta='Friend'*/}
                            {/*description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'*/}
                            {/*//extra={extra}*/}
                        {/*/>*/}
                    {/*</div>*/}
                   {/* <div>
                        <Card
                            image={src}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            //extra={extra}
                        />
                    </div>*/}
                {/*</div>*/}
            </div>
        );
//Learning Tips: can only be one line!! Can be a string, number or javascript
    }
}