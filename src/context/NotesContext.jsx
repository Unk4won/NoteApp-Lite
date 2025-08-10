import { createContext } from 'react';
import useNotes from '../hooks/useNotes';

// 1. Creamos el contexto.
// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext();

// 2. Creamos el componente Provider
export function NotesProvider({ children }) {
  const noteData = useNotes(); // Importar tu hook 'useNotes'
  return (
    <NotesContext.Provider value={noteData}>
      {children}
    </NotesContext.Provider>
  );
}
