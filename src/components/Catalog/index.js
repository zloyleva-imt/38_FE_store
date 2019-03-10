import React, {Component} from 'react';

import axios from'axios';

import CatalogList from '../CatalogList';

export default class Catalog extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        axios.get("http://localhost:3001/products")
            .then(res => {
                console.log(res);

                this.setState({
                    products: res.data.data.rows
                })

            });
    }

    render() {
        return (
            <main className="App-main container">
                <div className="row">
                    <div className="col">
                        <h2 className="h2">Catalog</h2>
                    </div>
                </div>

                <CatalogList products={this.state.products} />

            </main>
        );
    }
}