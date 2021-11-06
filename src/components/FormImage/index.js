
import React from 'react';
import Inputs from './Inputs';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

class FormImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Inputs ></Inputs>
        );
    }

}

export default FormImage