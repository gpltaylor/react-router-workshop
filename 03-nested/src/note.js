import React from "react";
import {Link} from 'react-router';
import noteService from "./application/notes/noteService";

var Note = ({params}) => {
  console.log("Note Render", params.id);
  var notesData = noteService.getNotes();
  var notes = notesData.filter(note => note.noteId === parseInt(params.id));

  if (notes === null || notes.length === 0) { return <div>Note not found</div>}

  var {noteId, userId, message} = notes[0];

  return (
    <div>
      <div>noteId: {noteId}</div>
      <div>user: {userId}</div>
      <div>wrote: {message}</div>
    </div>
  )
}

var NoteRow = ({noteId, userId, message, pathname}) => {
  return (
    <tr>
      <td>{noteId}</td>
      <td>{userId}</td>
      <td>{message}</td>
      <td><Link to={`${pathname}/${noteId}`}>more</Link></td>
    </tr>
  )
}

export {NoteRow};
export default Note;
