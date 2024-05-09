'use client';
import { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
    }
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value })
    }
    const sendTooltipStyle = {
        color: '#ffffff',
        backgroundColor: '#0D6EFD',
    }
    return (
        <div className="container mt-5">
            <Tooltip id="send" place="bottom" style={sendTooltipStyle} />
            <label htmlFor="email" className="mb-3">
                <h1>Login to Your Account</h1>
            </label>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={handleOnChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={handleOnChange} required />
                </div>
                <button type="submit" className="btn btn-primary" data-tooltip-id="send" data-tooltip-content="Login">
                    <RiSendPlaneLine size={25} />
                </button>
            </form>
        </div>
    );
}