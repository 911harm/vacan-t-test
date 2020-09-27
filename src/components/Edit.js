import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import { urlApi } from '../Global';


export default class Edit extends Component {
    componentDidMount(props) {
        this.id = this.props.match.params.id
        axios.get(urlApi + this.id).then(res => {
            // console.log(res.data)
            // console.log(this.id)
            this.setState({
                newPerson: res.data,
            })
            this.person.name.current.value = res.data.name
            this.person.email.current.value = res.data.email
            this.person.phone.current.value = res.data.phone
        })
    }
    id = 0
    person = {
        name: React.createRef(),
        email: React.createRef(),
        phone: React.createRef(),

    }

    state = {
        newPerson: {},
        status: false
    }
    onChange = (e) => {
        this.setState({
            newPerson: {
                name: this.person.name.current.value,
                email: this.person.email.current.value,
                phone: this.person.phone.current.value,
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        swal({
            title: "¿Estas Seguro?",
            text: "Los datos seran editados",
            icon: "warning",
            buttons: [true, true],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.put(urlApi + this.id, this.state.newPerson).then(res => {
                        console.log(res)
                        this.setState({
                            status: true
                        })
                    })
                }
                else {
                    swal("No se Edito");
                }
            });
    }

    render() {
        if (this.state.status) {
            return <Redirect to={"/Persona/"+this.id} />
        }
        return (
            <React.Fragment>
                <form className="form" onSubmit={this.onSubmit} onChange={this.onChange}>
                    <div className="center">

                        <label htmlFor="name">Nombre</label>
                        <input className="inputs-form" type="text" name="name" ref={this.person.name} defaultValue={this.person.name} />
                    </div>
                    <div className="center">
                        <label htmlFor="email">Email</label>
                        <input className="inputs-form" type="email" name="email" ref={this.person.email} defaultValue={this.person.email} />
                    </div>
                    <label htmlFor="phone">Telefono</label>
                    <input className="inputs-form" type="text" name="phone" ref={this.person.phone} defaultValue={this.person.phone} />
                    {/* validaciones */}
                    <input id="btn-submit" type="submit" value="Editar" />
                </form>
            </React.Fragment>
        )
    }
}
