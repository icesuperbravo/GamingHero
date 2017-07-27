import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import "./assets/SCSS/main.scss";

class App extends React.Component {
    render() {
        return (
            <div className="mainviewport">
                <Header />
                <Home />
                {/*<Footer />*/}
            </div>
        );
    }
}  // Learning tips: the render function can only render one div tag every time!!
   // in react.js, the class is instead by className!

render(<App/>, window.document.getElementById("app"));