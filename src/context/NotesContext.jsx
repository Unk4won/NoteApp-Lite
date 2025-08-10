import { createContext, useContext } from "react";

//CREAMOS EL CONTEXTO
const NotesContext = createContext();

//EXPORTAMOS UN HOOK PERSONALIZADO PARA USARLO DE FORMA MAS SENCILLA
export function useNotesContext(){
const context = useContext(NotesContext);
if (!context) {
throw new Error("El contexto debe ser usado dentro de un provider");
}return context;
};

//EXPORTAMOS EL PROVIDER PARA ENVOLVER COMPONENTES
export const NotesProvider = NotesContext.Provider;