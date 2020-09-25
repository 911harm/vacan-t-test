import Axios from 'axios';
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { urlApi } from '../Global';


export default class Edit extends Component {
    person={
        name:React.createRef(),
        email:React.createRef(),
        phone:React.createRef(),

    }

    state={
        newPerson:{},
        status:false
    }
    onChange=(e)=>{
        this.setState({
            newPerson:{
                name:this.person.name.current.value,
                email:this.person.email.current.value,
                phone:this.person.phone.current.value,
            }
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state.newPerson)
       Axios.put(urlApi+"1",this.state.newPerson).then(res=>{
           console.log(res)
           console.log(res.status)
           this.setState({
            status:true
        })
       })
    }
    render() {
        if(this.state.status){
            return <Redirect to="/home" />
        }
        return (
            <React.Fragment>
                 <form className="form" onSubmit={this.onSubmit} onChange={this.onChange}>
                   <div className="center">
                    
                    <label htmlFor="name">Nombre</label>
                    <input className="inputs-form" type="text" name="name"ref={this.person.name} />
                   </div>
                   <div className="center">
                   <label htmlFor="email">Email</label>
                       <input className="inputs-form" type="email" name="email" ref={this.person.email} />
                   </div>
                   <label htmlFor="phone">Telefono</label>
                   <input className="inputs-form" type="text" name="phone" ref={this.person.phone} />
                    {/* validaciones */}
                    <input id="btn-submit" type="submit" value="Enviar"/>
                </form>
            </React.Fragment>
        )
    }
}
