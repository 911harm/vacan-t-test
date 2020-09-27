import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Slider from './components/Slider';
import Section from './components/Section';
import Aside from './components/Aside';
import Error from './components/Error';
import Footer from './components/Footer';
import Add from './components/Add';
import Person from './components/Person';
import Edit from './components/Edit';

export default class Router extends Component {
     person=
        {name:'hector',email:'h@gmai.com',phone:1234}
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Slider size="slider" />
                    <div className="center">
                        <section id="content">
                            <Switch>
                                <Route exact path="/" render={() => (<Section title="Personas" />)} />
                                <Route exact path="/home" render={() => (<Section title="Personas" />)} />
                                <Route exact path="/Persona/:id" component={Person}/>
                                <Route exact path="/Edit/:id" component={Edit}/>
                                <Route exact path="/Add" component={Add} />
                                <Route component={Error} />

                            </Switch>
                        </section>
                            <Aside />
                            </div>
                        <div className="clearfix"></div>
                        <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
