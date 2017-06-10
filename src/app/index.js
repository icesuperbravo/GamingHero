import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import {Footer} from "./components/Footer";

class App extends React.Component {
    render() {
     return (
         <div className="container">
             <div className="row">
                 <Header/>
                 <Home />
                 <Footer />
             </div>
         </div>
     );
    }
}  // Learning tips: the render function can only render one div tag every time!!
   // in react.js, the class is instead by className!

render(<App/>, window.document.getElementById("app"));