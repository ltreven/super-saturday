import React, { Component } from 'react'
import  { Redirect } from "react-router-dom"

export class Signup extends Component {
    constructor (props) {
        super (props)
        this.state = {
            email: "",
            password : "",
            redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/account-created' />
        }
    }
    handleSubmit = (event) => {
        event.target.checkValidity()
        event.preventDefault()  
        this.setState(
            {
                email: "",
                password:""
            })
          if (event.target.checkValidity()) {
            this.setState({
                redirect: true
              })
          }
              
    }



    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                  <label>Email:</label>
                  <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />

                  <label>Contraseña:</label>
                  <input onChange={this.handleChange}  type="text" name="password" value={this.state.password} />
         
                  <input type="submit" value="Enviar" />
                     {this.renderRedirect()}
            </form>
            </div>
        )
    }
}

export default Signup
