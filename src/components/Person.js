import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { urlApi } from '../Global';
import { NavLink } from 'react-router-dom';



export default class Person extends Component {
    state = {
        person: {},
        status: false

    }
    Delete = () => {
        console.log("Borrando Persona con id:" + this.state.person.id)
        axios.delete(urlApi + "/" + this.state.person.id).then(res => {
            console.log(res)
            this.setState({
                status: true
            })
        })
    }


    componentDidMount(props) {
        var id = this.props.match.params.id
        axios.get(urlApi + id).then(res => {
            console.log(id)
            this.setState({
                person: res.data
            })
        })
    }

    render() {
        if (this.state.status) {
            return <Redirect to="/home" />
        }
        return (
            <div className="Person">
                <h1>Nombre: {this.state.person.name}</h1>
                <hr />
                <h2>Email: {this.state.person.email}</h2>
                <h2>Telefono:{this.state.person.phone}</h2>
                <h2>Web: {this.state.person.website}</h2>
                <h2>Usuario{this.state.person.username}</h2>
                <br />
                <button className="btn btn-danger" onClick={this.Delete}> Borrar </button>
                <br/>
                <NavLink className="btn btn-warning" to={"/Edit/"}>Editar</NavLink>
            </div>
        )
    }
}
