import React, { Component } from 'react'
import axios from 'axios';
import { urlApi } from '../Global';
import { NavLink } from 'react-router-dom';

export default class Section extends Component {
    state = {
        persons: []

    }

    componentDidMount() {
        axios.get(urlApi).then(res => {
            console.log(res.data)
            this.setState({
                persons: res.data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.props.title}</h2>

                {this.state.persons.map(person => {
                    return (
                        <article className="article-item" key={person.id}>
                            <h2>{person.name}</h2>
                            <span className="date">
                                {person.email}
                            </span>
                            <span className="date">
                                {person.phone}
                            </span>
                            <NavLink to={"/Persona/" + person.id}>más Información</NavLink>
                        </article>
                    )
                })
                }
            </React.Fragment>
        )
    }
}
