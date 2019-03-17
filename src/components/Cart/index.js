import React, {Component} from 'react';
import axios from "axios";

export default class Cart extends Component {
    render() {
        return (
            <div>
                Cart
            </div>
        );
    }

    componentDidMount() {
        axios.get("http://localhost:5000/cart/1", {

        },{
            withCredentials: true
        })
            .then(res => {
                console.log(res.data.status);
                
            });
    }
}