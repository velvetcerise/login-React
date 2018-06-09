import React, { Component } from 'react';
import FormRow from './FormRow'
import './Form.css'

class Form extends Component {
    //¿Si quiero tener el valor del estado de un componente que esta en otro archivo que hago? =>
    //this.refs.nombreComponente.nombreMetodo
    constructor() {
        super(); 
        this.state = {
            labelLegend: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        }

        onRegister(e) {
            console.log(this.refs.nombre.getValue())
        }

        onSubmit(e) { //Formulario recarga la página recordar detener el evento con prevent
            e.preventDefault();
            // console.log(e);
            let nombre = this.refs.nombre.getValue();
            let apellido = this.refs.apellidos.getValue();
            let email = this.refs.correo.getValue();
            let password = this.refs.password.getValue();
            let confirm = this.refs.confirm2.getValue();

            if (password === confirm) {
                //alert('contraseña correcta');
                this.setState({ labelLegend: 'Logeado exitosamente' })
            } else alert('Ingresaste una constraseña incorrecta, intenta de nuevo');
        }
    render() {
        
        
        return( //Referencias nuestros inputs porpiedad de React
            <div className= "Form">
                <form className="Form-styles" onSubmit={this.onSubmit}>  
                    <h2 className="Form-title">Registro</h2>  
                    <FormRow
                    inputType= "text"
                    className= "Form-Label"
                    labelText= "Nombre"
                    isRequired={true}
                    ref="nombre"
                    
                    />

                    <FormRow
                        inputType="text"
                        className= "Form-Label"
                        labelText="Apellido"
                        isRequired={true}
                        ref="apellidos"
                        
                    />

                    <FormRow
                        inputType="email"
                        className= "Form-Label"
                        labelText="Correo eléctronico"
                        isRequired={true}
                        ref="correo"
                        
                    />

                    <FormRow
                        inputType="password"
                        className= "Form-Label"
                        labelText="Contraseña"
                        isRequired={true}
                        ref="password"
                        
                    />

                    <FormRow
                        inputType="password"
                        className= "Form-Label"
                        labelText="Confirmar contraseña"
                        isRequired={true}
                        ref="confirm2"
                        
                    />

                    <button className="button" >Registro</button>
                    <br/>
                    <label htmlFor="">{ this.state.labelLegend}</label>
                </form>
            </div>
        );
    }
}

export default Form;