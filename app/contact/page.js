'use client';
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
export default function Contact() {
    const [credentials, setCredentials] = useState({ name: '', email: '', message: '' });
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
                <h1>Create a New Account</h1>
            </label>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" value={credentials.name} onChange={handleOnChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={handleOnChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" value={credentials.message} onChange={handleOnChange} required rows={10}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" data-tooltip-id="send" data-tooltip-content="Send Message">
                    <IoSend/>
                </button>
            </form>
        </div>
    );
}