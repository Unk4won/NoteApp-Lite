import React from 'react';
import { useNotesContext } from '../../hooks/useNotesContext';
import { NoteListItem } from './NoteListItem';

export function NoteList() {
  const { notes, createNote, activeNote, deleteNote, selectNote } = useNotesContext();
  
  return (
    <aside className="w-1/4 p-4 border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notas</h2>
        <button
          onClick={createNote}
          className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          + Nueva Nota
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        {notes.length > 0 ? (
          notes.map(note => (
            <NoteListItem
              key={note.id}
              note={note}
              active={note.id === (activeNote && activeNote.id)}
              onClick={() => selectNote(note.id)}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-8">
            No hay notas, crea una para empezar.
          </p>
        )}
      </div>
    </aside>
  );
}

export default NoteList;