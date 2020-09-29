import React, { Component } from 'react';
import axios from 'axios';

export class DiscontinueProduct extends Component {
    static displayName = DiscontinueProduct.name;

    constructor(props) {
        super(props);
        this.state = { statusCode: 0, response: [], id: "", waiting: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ id: e.target.value });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>{this.state.waiting ? "Request sent, awaiting response." : "Response received, status: " + this.state.statusCode}</p>
                    <p>Response Data: {JSON.stringify(this.state.response)}</p>

                    <label>Id:</label>
                    <input type="text" id="id" value={this.state.id} name="id" onChange={this.handleChange} />

                    <button type="submit" value="Submit">Go!</button>
                </form>
            </div>);
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ waiting: true });
        axios({
            url: 'Person/API/DiscontinueProduct',
            method: 'put',
            params: { id: this.state.id }
        }
        ).then(res => {
            this.setState({ statusCode: res.status, response: res.data, waiting: false });
        }).catch(err => {
            this.setState({ statusCode: err.response.status, response: err.response.data, waiting: false });
        });
    }
}