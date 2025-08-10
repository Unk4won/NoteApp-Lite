// src/components/NoteEditor/NoteEditor.jsx
import React, { useMemo } from 'react';
import { useNotesContext } from '../../hooks/useNotesContext';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export function NoteEditor() {
  const { activeNote, updateNote } = useNotesContext();

  const editor = useMemo(() => withReact(createEditor()), []);

  if (!activeNote) {
    return (
      <main className="flex-grow flex items-center justify-center p-8">
        <p className="text-gray-500 text-lg">
          Selecciona una nota o crea una nueva para empezar a escribir.
        </p>
      </main>
    );
  }

  const handleTitleChange = (e) => {
    updateNote({
      ...activeNote,
      title: e.target.value,
    });
  };

  const handleBodyChange = (value) => {
    updateNote({
      ...activeNote,
      body: JSON.stringify(value),
    });
  };
  
  const initialValue = useMemo(() => {
    try {
      return activeNote.body ? JSON.parse(activeNote.body) : [{ type: 'paragraph', children: [{ text: '' }] }];
    } catch (error) {
      console.error("Error al parsear el cuerpo de la nota:", error);
      return [{ type: 'paragraph', children: [{ text: '' }] }];
    }
  }, [activeNote.body]);
  

  return (
    <main className="flex-grow p-8 bg-white flex flex-col">
      <input
        type="text"
        value={activeNote.title}
        onChange={handleTitleChange}
        className="w-full text-4xl font-bold mb-4 outline-none border-b-2 border-transparent focus:border-blue-500 transition-colors"
      />
      <div className="flex-grow">
        <Slate editor={editor} value={initialValue} onChange={handleBodyChange}>
          <Editable
            className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none"
            spellCheck
            autoFocus
          />
        </Slate>
      </div>
    </main>
  );
}