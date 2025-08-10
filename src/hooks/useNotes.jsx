import { useState, useEffect } from "react"
import { getNotesFromLocalStorage, saveNotesFromLocalStorage } from "../api/localStorage"

const useNotes = () => {
//[ESTADO QUE GUARDARA LAS NOTAS, FUNCION PARA CAMBIAR EL VALOR] = El valor inicial es la llamada a la función que obtiene notas del local.
const [notes, setNotes] = useState(()=>getNotesFromLocalStorage());  

// ESTADO QUE SE MOSTRARA ACTIVA EN EL MOMENTO DE EDITAR .
const [activeNoteId, setActiveNoteId] = useState(null)

//HOOK PARA QUE CUANDO CADA QUE CAMBIE NOTES SE ACTUALIZE.
useEffect(() => {
    // Si hay notas, las guardamos en localStorage.
    if (notes.length > 0) {
      saveNotesFromLocalStorage(notes);
    }
    // El array [notes] indica que el efecto se ejecutará cuando 'notes' cambie.
  }, [notes]); 

//FUNCIONES PARA MANEJAR LAS NOTAS.

//CREACIÓN DE LAS NOTAS.
const createNote =()=>{
    //OBJETO QUE GUARDARA TODAS LAS PROPIEDADES DE LA NOTA.
    const newNote= {
    id : Date.now(),//ID ÚNICO POR EL USO DE MILISEGUNDOS.
    title : 'Nueva Nota',
    body: '',
    lastModified : Date.now(), // CAPTURAMOS EL ULTIMO MOMENTO DONDE FUE MODIFICADA.
    };
setNotes([newNote, ...notes]);//AñADIMOS LA NOTA AL INICIO.
setActiveNoteId([newNote.id]);// HACEMOS QUE LA NOTA ESTE ACTIVA.
};

// ACTUALIZAR NOTA.
const updateNote = (updatedNote)=>{
 // Mapeamos sobre las notas para encontrar la que tiene que ser actualizada
const updatedNotesArray = notes.map((note) =>
 note.id === updatedNote.id ? { ...updatedNote, lastModified: Date.now() } : note
);
setNotes(updatedNotesArray); // Actualizamos el estado
};

//BORRAR NOTA
const deleteNote=(idToDelete)=>{
//FILTRAMOS EL ARRAY PARA ELIMINAR LA NOTA QUE COINCIDA CON EL ID QUE QUEREMOS.
setNotes(notes.filter((note) => note.id !== idToDelete));

};

//SELECCIONAR NOTA
const selectNote= (id)=>{
setActiveNoteId(id);
};

//OBTENER NOTA ACTIVA
const activeNote = notes.find((note) => note.id === activeNoteId);

  return {
    notes,
    activeNote,
    createNote,
    updateNote,
    deleteNote,
    selectNote,
  };
}

export default useNotes