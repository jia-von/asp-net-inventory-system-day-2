import React, { Component } from 'react';
import axios from 'axios';

export class AddProductQuantity extends Component {
    static displayName = AddProductQuantity.name;

    constructor(props) {
        super(props);
        this.state = { statusCode: 0, response: [], id: "", AmountAdded: "", waiting: false };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>{this.state.waiting ? "Request sent, awaiting response." : "Response received, status: " + this.state.statusCode}</p>
                    <p>Response Data: {JSON.stringify(this.state.response)}</p>

                    <label>ID:</label>
                    <input type="text" id="id" value={this.state.id} name="id" onChange={this.handleInputChange} />


                    <label>Quantity:</label>
                    <input type="number" id="AmountAdded" value={this.state.AmountAdded} name="AmountAdded" onChange={this.handleInputChange} />

                    <button type="submit" value="Submit">Go!</button>
                </form>
            </div>);
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ waiting: true });
        axios({
            url: 'Person/API/AddQuantityProduct',
            method: 'put',
            params: { id: this.state.id, AmountAdded: this.state.AmountAdded }
        }
        ).then(res => {
            this.setState({ statusCode: res.status, response: res.data, waiting: false });
        }).catch(err => {
            this.setState({ statusCode: err.response.status, response: err.response.data, waiting: false });
        });
    }
}