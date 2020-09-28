import React, { Component } from 'react';
import axios from 'axios';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        // 1) When we build the component, we assign the state to be loading, and register an empty list in which to store our forecasts.
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        // 2) When the component mounts, we make the async call to the server to retrieve the API results.
        this.populateProductData();
    }

    static renderProductTable(products) {
        // 5) When the async call comes back, render will call this method rather than rendering "Loading...", which will create our table.
        // Fetch Data completed with the help from James September 28, 2020. Do not change the FetchData as it will complicate things behind the scene for get request. 
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Is Discontinued</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.isDiscontinued? "yes" : "no"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        // 4) When we render, this ternary statement will with print loading, or render the forecasts table depending if the async call has come back yet.
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderProductTable(this.state.products);

        // Either way we render the title, and a description.
        return (
            <div>
                <h1 id="tabelLabel" >Products List</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateProductData() {
        // 3) Make the async call to the API.
        // When an async call is made, it "awaits" a response. This means that rather than the server hanging and keeping the "thread" (process) open, it shelves the thread to be picked up when the response comes back.
        // This frees up server resources to do other things in the event the request takes a few seconds (or more, if your internet is straight out of 1995).

        // Axios replaces fetch(), same concept. Send the response and "then" when it comes back, put it in the state.
        axios.get('Person/API/ShowInventory').then(res => {
            this.setState({ products: res.data, loading: false });
        });
    }
}
