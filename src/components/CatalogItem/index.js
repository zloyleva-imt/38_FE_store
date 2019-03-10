import React from 'react';

export default (props) => {
    const {id, amount, description, title, price, image } = props.product;

    return (
        <div className="card col-12 col-md-6 col-lg-3 my-2">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="">
                    <div className="product-price">Price: {price}$</div>
                    <div className="product-amount">Amount: {amount}</div>
                </p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    );
}