// src/App.jsx
import { NotesProvider } from './context/NotesContext';
// Importa tus componentes de la UI
import { NoteList } from './components/NoteList/NoteList';
import { NoteEditor } from './components/NoteEditor/NoteEditor';
import { Layout } from './components/ui/Layout';

function App() {
  return (
    // Ya no necesitas llamar a useNotes aquí
    <NotesProvider>
      <Layout>
        <NoteList />
        <NoteEditor />
      </Layout>
    </NotesProvider>
  );
}

export default App;