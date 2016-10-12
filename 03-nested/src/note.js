import React from "react";
import {Link} from 'react-router';
import noteService from "./application/notes/noteService";

var Note = ({params}) => {
  console.log("Note Render", params.id);
  var noteId, userId, message;
  var notesData = noteService.getNotes();
  var notes = notesData.filter(note => note.noteId == params.id);
  if(notes && notes.length === 1) {
    var {noteId, userId, message} = notes[0];
  }

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
