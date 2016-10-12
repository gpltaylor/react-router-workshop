import React from "react";
import {Match} from 'react-router';
import Note, {NoteRow} from "./note";
import noteService from "./application/notes/noteService";

var Notes = ({params, location, pathname}) => {
  console.log("Notes Render", params.id);

  var notesData = noteService.getNotes();

  return <div>
    <h1>Notes</h1>
    <p>See the notes for this applications</p>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>User</th>
          <th>msg</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      {notesData.map(note => <NoteRow key={note.noteId} {...note} pathname={pathname}/> )}
      </tbody>
    </table>

  </div>
}

export default Notes;
