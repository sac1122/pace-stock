
import "./App.css";
import { useState } from "react";
import React from "react"

import {useNavigate} from "react-router-dom"

export default function (props) {

    const navigate = useNavigate();


    const[username, setUsername] = useState('');

    const[password, setPassword] = useState('');
    const[login, setLogin] = useState(false)


    let handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/signup', {
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
                setLogin(true);

                
            })
            .catch((err) => {
                console.log(err.message);
            });
      };
  return (
    <>

    
    
    <div className="Auth-form-container bg-color ">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content text-center">
        <img src="./boost2.jpg" className="mb-5 img3"></img>
          <h3 className="Auth-form-title">Create New Account</h3>
          <p className="mb-4">Let's log in to launch your automation.</p>
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
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn2 " >
              Submit
            </button>
          </div>
          
        </div>
      </form>
      
    </div>
    {login == true && navigate('/')}</>
  )
}

