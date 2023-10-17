import { Component } from "react";
import "./signup.css"
import React from "react"
import {Link} from "react-router-dom"

class Signup extends Component{

    render(){
        return(
            <form className='From-card'>
        <h1 className='head'>Sign up</h1>
      <label className="label-head" for="userName">Name</label>
      <input type="text" className='input-name' placeholder='Name' id="userName"/>
      <label className="label-head" for="usermail">Email</label>
      <input type="email" className='input-mail' placeholder='Email' id="usermail"/>
      <label className="label-head" for="num">Number</label>
      <input type="tel" className='input-number' placeholder='Number' id="num"/>
     
      <div className="gender">
      <p className='para'>Gender</p>
      <input type="radio" name="gender" id="male"/>
      <label  className= "gender-name" for="male">Male</label>
      <input type='radio' name="gender" id="female"/>
      <label className= "gender-name" for="female">Female</label>
      </div>
      <p className='para'>How do you hear about this?</p>
      <div>
      <input  type='checkbox'id="checkbox1" />
      <label className="check" for="checkbox1">Linkdin</label>
      <input type='checkbox'id="checkbox2" />
      <label  className="check"  for="checkbox2">Friends</label>
      <input  type='checkbox'id="checkbox3" />
      <label   className="check"  for="checkbox3">Job Portals</label>
      <input   type='checkbox'id="checkbox4" />
      <label  className="check"  for="checkbox4">Others</label>
     
      </div>
      <div className='cart'>
      <p >City</p>
        <select>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Ahmedabad</option>
      </select>
      </div>
      <div className='cart'>
      <p >State</p>
        <select>
        <option>Gujarat</option>
        <option>Maharashtra</option>
        <option>Karnataka</option>
      </select>
      </div>
      <button className='btn' onClick={this.fun}>Save</button>
      <span>If you have a Account <Link to="/login">Login</Link> </span>
      
      
      </form>
        )

    }
        
        

}
export default Signup