'use client'
import { Tooltip } from "react-tooltip";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useState } from "react";
export default function AddNote() {
    const [details, setDetails] = useState({ title: '', description: '', tag: '' });
    const addNoteToolTipStyle = {
        color: '#ffffff',
        backgroundColor: '#0D6EFD',
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(details)
    }
    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value })
    }
    return (
        <div className="container mt-3">
            <label htmlFor="title">
                <h1>Add Note</h1>
            </label>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="title" value={details.title} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={details.description} onChange={handleOnChange} required rows={5}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="tag" className="form-control" id="tag" aria-describedby="tag" value={details.tag} onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-primary" data-tooltip-id='addNote' data-tooltip-content="Add a new Note" >
                    <MdOutlineBookmarkAdd size={25} className="react-icon"/>
                </button>
                <Tooltip id="addNote" place="right" style={addNoteToolTipStyle} />
            </form>
        </div>
    )
}