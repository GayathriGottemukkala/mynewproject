import { Component } from "react";
import "./login.css"
import React from "react"
import {Link} from "react-router-dom"

 class Loginpage extends Component{
    render(){
        return(
            <div className="container-bg">
                <h1 className="head">Login</h1>

                <form className="cart-giv"> 
                <label className="email" for="nameId">Email</label>
                <input type="email" id="nameId" placeholder="Email"/>
                <label  className="email" for="password">Password</label>
                <input type="password" id="password" placeholder="password"/>
                <button className="login-btn">login</button>
                <span className="spam-ele">Don't you have an Account <Link to="/">Register</Link> Now</span>
                
                </form>
                
            </div>
        )
    }
 }
 export default Loginpage