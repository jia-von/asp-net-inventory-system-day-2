import React, { Component } from 'react';
import axios from 'axios';

export class AddProduct extends Component {
    static displayName = AddProduct.name;

    constructor(props) {
        super(props);
        this.state = { statusCode: 0, response: [], name: "", quantity: "", waiting: false };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuantChange = this.handleQuantChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }


    handleQuantChange(e) {
        this.setState({ quantity: e.target.value });
    }

    render() {

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.waiting ? "Request sent, awaiting response." : "Response received, status: " + this.state.statusCode}</p>
                <p>Response Data: {JSON.stringify(this.state.response)}</p>
                
                <label>Name:</label>
                    <input type="text" id="name" value={this.state.name} name="name" onChange={this.handleNameChange} />
                
                
                <label>Quantity:</label>
                    <input type="number" id="quantity" value={this.state.quantity} name="quantity" onChange={this.handleQuantChange} />
                
                <button type="submit" value ="Submit">Go!</button>
                </form>
                </div>);
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ waiting: true });
        axios({
            url: 'Person/API/AddProduct',
            method: 'post',
            params: { name: this.state.name, quantity: this.state.quantity }
        }
        ).then(res => {
            this.setState({ statusCode: res.status, response: res.data, waiting: false });
        }).catch(err => {
            this.setState({ statusCode: err.response.status, response: err.response.data, waiting: false });
        });
    }
}