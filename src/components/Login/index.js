import React, { Component } from 'react';
import axios from'axios';

import { Redirect } from "react-router-dom";

export default class Login extends Component{
    render() {
        return (
            <div className="row">
                <form className="col-10" onSubmit={this.submitLoginHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    submitLoginHandler= (e) => {
        e.preventDefault();
        console.log("submitLoginHandler");

        console.log(e.target[0].value);
        console.log(e.target[1].value);

        axios.post("http://localhost:5000/login", {
            email:e.target[0].value,
            password:e.target[1].value,
        },{
            withCredentials: true
        })
            .then(res => {
                console.log(res.data.status);
                if(res.data.status === "login"){
                    this.props.history.push('/')
                }
            });
    };
}

