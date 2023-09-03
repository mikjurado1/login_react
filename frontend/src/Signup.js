import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios';

function Signup() {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput =(event)=>{
        setValues(prev => ({
            ...prev,
            [event.target.name]:[event.target.value]
        }))
    }


    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        
        if(errors.name === "" && errors.email ==="" && errors.password===""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <h2>Sign-up</h2>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input 
                    onChange={handleInput}
                    type='text' placeholder='Enter your name' className='form-control rounded-0' name='name'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span> }
                </div>
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
                <button className='btn btn-success w-100'><strong>Signup</strong></button>
                <p>Agree terms and policies</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Login</strong></Link>
            </form>
        </div>
    </div>
  )
}

export default Signup