import React, { setState } from "react";

export default function Logins() {
    const [userNameLogin, setUserNameLogin] = setState("");
    const [password, setPassword] = setState("");

    function ValidateForm() {
        return userNameLogin.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="userNameLogin"></label>
                <input
                    type="text"
                    name="userNameLogin"
                    id="userNameLogin"
                    value={userNameLogin}
                    onChange={e => setUserNameLogin(e.target.Value)}
                />

                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.Value)}
                />
                <div className="help-block">Password is required</div>

                <input type="submit" value="Submit" disabled={!ValidateForm} />
            </form>
        </div>
    )
}
