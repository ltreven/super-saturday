import React, {useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Forgot() {

       //ESTADO inicial
       const initialState = {
        email: "",
        validated: false,
        sent: false
    }

    //HOOKS
    const [state, setState] = useState(initialState)

    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const inputSave = (event) => {
        event.currentTarget.checkValidity()
        const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        if (regex.test(state.email)) {
            setState({...state,validated: true, sent: true})
            console.log("email: ", state.email)
        }else{
            
            console.log("email: ", state.email)
        }
        event.preventDefault()
    }


    if (state.sent===true){
        return (
            <div>
            <h1>Correo enviado con éxito!!</h1>
            <Link to="/">Home</Link>
            </div>
        )
            
    }else{
        return (
            <div>
                <Form onSubmit={inputSave} noValidate validated={state.validated} >
                    <FormGroup>
                        <FormLabel>Email:</FormLabel>
                        <FormControl type="email" name="email" required onChange={handleInput} value={state.email} placeholder='Ingrese su email'/>
                        <Form.Control.Feedback>Tu email ha sido validado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Debe insertar un email válido!</Form.Control.Feedback>
                    </FormGroup>

                    <Button variant='primary' type="submit">Enviar el nuevo password</Button>
                </Form>
            </div>
        )
    }
    
}



export default Forgot
