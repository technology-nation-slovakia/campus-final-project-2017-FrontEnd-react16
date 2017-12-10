import React from "react";
import { Switch, Route } from "react-router-dom";

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


const Main = () => (
    <main>
        <div className="container-fluid">
            <Switch>
                <Route exact path='/' name="home" component={Home}/>
                <Route path='/about' name="about" component={About}/>
                <Route path='/contact' name="contact" component={Contact}/>
            </Switch>
        </div>
    </main>
)

export default Main