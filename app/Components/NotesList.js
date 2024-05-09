'use client'
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
export default function NotesList() {
    // TODO -> fetch notes from API
    const notes = [{
        title: "Name",
        description: "My name is Hamid Raza.",
        tag: "personal",
    }];
    const editTooltipStyle = {
        color: '#000000',
        backgroundColor: '#31D2F2',
    }
    const deleteTooltipStyle = {
        color: '#ffffff',
        backgroundColor: '#BB2D3B',
    }
    return (
        <div className="container mt-2">
            <h1>Your Notes</h1>
            {notes.map((note) => (
                <div className="card my-2" key={note.title}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {note.title}
                            <CiEdit className="react-icon-black mx-2 float-end" size={25} data-tooltip-content="Edit Note" data-tooltip-id="edit" />
                            <AiTwotoneDelete className="react-icon-black mx-2 float-end" size={25} data-tooltip-content="Delete Note" data-tooltip-id="delete" />
                            <Tooltip id="edit" place="top" style={editTooltipStyle} />
                            <Tooltip id="delete" place="top" style={deleteTooltipStyle} />
                        </h5>
                        <p className="card-text">#{note.tag}</p>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}