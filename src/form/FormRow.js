import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: " "
        }
        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    onChange(e) {
        this.setState ( { inputValue: e.target.value })
    }
    getValue() { //Obtenderemos el valor o estado actual del inputValue que esta escribiendo el usuario, lo declararemos en nuestro construtor
        return this.state.inputValue
    }

    render() {
        return (
            <div className="Principal">
            <label className="Form-Label" >{ this.props.labelText }</label>
            <input 
                type={ this.props.inputType }
                className = "Form-input"
                value = { this.state.inputValue } //Pasarñe un valor para que sea dinamico
                onChange = { this.onChange }
                required = { this.props.isRequired } />
            </div>
        );
    }
}

FormRow.propTypes = {
    inputType: PropTypes.string,
    labelText: PropTypes.string,
    isRequired: PropTypes.bool
}

export default FormRow;