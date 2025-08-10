// src/hooks/useNotesContext.js
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export function useNotesContext() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotesContext debe ser usado dentro de un NotesProvider');
  }
  return context;
}