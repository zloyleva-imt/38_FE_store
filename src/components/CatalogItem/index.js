import React from 'react';

import axios from'axios';

export default (props) => {
    const {id, amount, description, title, price, image } = props.product;

    return (
        <div className="card col-12 col-md-6 col-lg-3 my-2">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="">
                    <div className="product-price">Price: {price}$</div>
                    <div className="product-amount">Amount: {amount}</div>
                </div>
                <button className="btn btn-primary" onClick={()=>{addToCart(id)}}>Add to cart</button>
                <button className="btn btn-danger" onClick={()=>{EditProduct(id)}}>Edit</button>
            </div>
        </div>
    );
}

const addToCart = (product_id,user_id=1) => {
    console.log("addToCart");
    axios.post(`http://localhost:3001/carts/${user_id}`,{
        "user_id": user_id,
        "product_id": product_id,
        "amount": 1
    })
        .then(res => {
            console.log(res);

        });
};

const EditProduct = (product_id) => {
    console.log("addToCart");
    axios.put(`http://localhost:3001/products/${product_id}`,{
        "title": "new title",
        "amount": 1
    })
        .then(res => {
            console.log(res);

        });
};