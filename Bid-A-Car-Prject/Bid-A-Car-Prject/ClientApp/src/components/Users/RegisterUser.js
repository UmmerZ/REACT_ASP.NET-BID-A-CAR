import React, { useState } from "react";
import axios from "axios";

export function RegisterUser(props) {
    const [state, setState] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmitClick = e => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer();
        } else {
            props.showError("Passwords do not match");
        }
    };

    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            props.showError(null);
            const payload = {
                email: state.email,
                password: state.password,
            };
            axios
                .post("https://localhost", payload)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            successMessage:
                                "Registration successful. Redirecting to home page..",
                        }));

                        props.showError(null);
                    } else {
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            props.showError("Please enter valid username and password");
        }
    };

    return (
        <div class = "form-group">
            <h1>Edit</h1>
            <form method="/" action="post">
                <div class="form-group">
                    <label  htmlFor="userName">User Name</label>
                    <input class="form-control" type="text" name="userName" id="userName" />
                </div>

                <div class="form-group">
                    <label  htmlFor="email">Email</label>
                    <input class="form-control" type="text" name="email" id="email" />
                </div>
                <div class = "row">
                <div class="col">
                    <label htmlFor="password">Password</label>
                        <input class="form-control" type="password" name="password" id="password" />
                        <div className="help-block">Password is required</div>
                </div>

                <div class="col">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                        <input class="form-control" type="password" name="confirmPassword" id="confirmPassword" />
                    </div>
                    </div>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}