import React, { useState } from 'react'
import axios from 'axios'
import { NavMenuLogin } from '../PageLayout/NavMenuLogin'
import { Link, useHistory } from 'react-router-dom'
import { Footer } from '../PageLayout/Footer'

export function RegisterUser(props) {
    const [statusCode, setStatusCode] = useState(0)
    const [response, setResponse] = useState([])
    const history = useHistory()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [waiting, setWaiting] = useState(false)
    const [error, setError] = useState('')
    const [passwordError, setPasswordError] = useState('')

   
 
  

    function handleChange(event) {
        switch (event.target.id) {
            case 'userName':
                setUserName(event.target.value)
                break
            case 'email':
                setEmail(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break
            case 'confirmPassword':
                setConfirmPassword(event.target.value)
                break
            
        }
    }
    //this axios call will register a user on the database
    function handleSubmit(event) {
        event.preventDefault()
        if (password !== confirmPassword) {
            setPasswordError(true);
            return
        }
 
        axios(
            {
                method: 'post',
                url: 'User/Register',
                params: {
                    userName,
                    email,
                    password,
                    confirmPassword
                }
            }
        ).then((response) => {
            if (response.data.status === 'created') console.log(response)
            setWaiting(false)
            setResponse(response.data)
            setStatusCode(response.status)

            //this will redirect users to welcome-users page after successful creation
            history.push('/welcome-users')
        }).catch((err) => {
            setPasswordError(true);
            setError(true);
            
        })
    }
 

    return (
        <>
            <NavMenuLogin />
            <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center ">Register Yourself</h1>
            <section id="cover" className="min-vh-100">
                <div id="cover-caption">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <h1 className="display-4 py-2 text-truncate"></h1>
                                <div className="px-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="sr-only">UserName</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="User Name"
                                                id="userName"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only">Email</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                       
                                        <div className="form-group">
                                            <label className="sr-only">Password</label>

                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="form-group">
                                            <label className="sr-only">Confirm Password</label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Confirm Password"
                                                id="confirmPassword"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {passwordError && (
                                            <error style={{ color: "red" }}>Passwords Dont Match!</error>
                                        )}
                                        <input className="btn btn-info btn-block my-4" type="submit" value="Register" />
                                    </form>

                                    <Link to="/login">Already have an account?</Link>
                                    {error && (
                                        <error style={{color: "red"}}>The username already exists!</error>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
