import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    

    const [values, setValues] = useState({
        email:0,
        password:0
    })

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleInput =(event)=>{
        setValues(prev => ({
            ...prev,
            [event.target.name]:[event.target.value]
        }))
    }


    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
                
        if(errors.email ==="" && errors.password===""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {                
                if(res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err))
        }
    }

   
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input
                    onChange={handleInput}
                    type='email' placeholder='Enter e-mail' className='form-control rounded-0' name='email'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span> }
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input 
                    onChange={handleInput}
                    type='password' placeholder='Enter password' className='form-control rounded-0' name='password'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span> }
                </div>
                <button type="submit" className='btn btn-success w-100'><strong>Login</strong></button>
                <p>Agree terms and policies</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Register</strong></Link>
            </form>
        </div>
    </div>
  )
}

export default Login;