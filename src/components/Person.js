import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { urlApi } from '../Global';
import { NavLink } from 'react-router-dom';
//
import swal from 'sweetalert';



export default class Person extends Component {
    state = {
        person: {},
        status: false

    }
    Delete = () => {
        swal({
            title: "Seguro quieres elminarl@?",
            text: "No se puede recuperar despues de eliminado",
            icon: "warning",
            buttons: [true,true],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log("Borrando Persona con id:" + this.state.person.id)
                axios.delete(urlApi + "/" + this.state.person.id).then(res => {
                    console.log(res)
                    this.setState({
                        status: true
                    })
                })
            }
            else{
              swal("No se elimino");
            }
          });
    }


    componentDidMount(props) {
        var id = this.props.match.params.id
        axios.get(urlApi + id).then(res => {
            // console.log(res.data)
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
                <hr/>
                <img src="https://www.freeiconspng.com/uploads/person-icon-8.png" alt={this.state.person.name}/>
                <div className="basic-data">
                    <ul>
                        <li>Email: {this.state.person.email}</li>
                        <li>Telefono: {this.state.person.phone}</li>
                        <li>Web: <a href={this.state.person.website} >{this.state.person.website}</a></li>
                        <li>Usuario: {this.state.person.username}</li>

                    </ul>
                </div>
                
                <div>
                <button className="btn btn-danger" onClick={this.Delete}> Borrar </button>
                
                <NavLink className="btn btn-warning" to={"/Edit/"+this.state.person.id}>Editar</NavLink>
                </div>
            </div>
        )
    }
}
