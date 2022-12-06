
import "./App.css";
import { useState } from "react";
import React from "react"

import {useNavigate} from "react-router-dom"

export default function (props) {

    const navigate = useNavigate();


    const[username, setUsername] = useState('');

    const[password, setPassword] = useState('');
    const[authenticate, setAuthenticate] = useState(false);
    const[falseAuthenticate, setFalseauthenticate] = useState(false);
    const[popup, setPopup] = useState(false);
    const[user, setUser] = useState([]);


    let handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
                if(data.length !== 0){
                  setAuthenticate(true);
                  setUser(data);
                }
                else{
                  setFalseauthenticate(true);
                  setPopup(true)
                  
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
      };
  return (
    <>

    
    
    <div className="Auth-form-container bg-color">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content text-center">
        <img src="./boost2.jpg" className="mb-5 img3"></img>
          <h3 className="Auth-form-title">Welcome to Mardeen</h3>
          <p>Let's log in to launch your automation.</p>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1 inp"
              placeholder="Enter email"
              value= {username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1 inp"
              placeholder="Enter password"
              value= {password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="space-between password">
          <p className="forgot-password mt-3 ">
            <a href="/signup">Add New</a>
          </p>
          <p className="forgot-password mt-3 ">
            <a href="/signup">Forgot Password</a>
          </p>
          </div>
          <div className="d-grid gap-2 mt-2">
            <button type="submit" className="btn2 " >
              Submit
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn3 " >
            <a href="#" class="fa fa-google icon2 mt-1"></a> Sign in with Google <i className="fa fa-arrow-right mt-2 arrow right"></i>
            </button>
            <button  className="btn3 " >
            <a href="#" class="fa fa-github icon2 mt-1"></a> Sign in with Github <i className="fa fa-arrow-right mt-2 arrow right"></i></button>
            
          </div>
          
        </div>
      </form>
      
    </div>
    {authenticate == true && navigate('/home')}</>
  )
}

