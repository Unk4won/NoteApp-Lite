// NOMBRE DE LA CLAVE QUE USAMOS PARA GUARDAR LAS NOTAS EN EL LOCALSTORAGE

const STORAGE_KEY = "notion-line-notes";

//Función para obtener las notas
export function getNotesFromLocalStorage (){
const notes= localStorage.getItem(STORAGE_KEY); 
  // SI HAY NOTAS EN EL LOCAL LAS PARSEAMOS DE TEXTO A UN OBJETO JS
  return notes ? JSON.parse(notes): []; 
  //SINO DEVUELVE UN ARRAY VACIÓ QUE SE LLENARA MAS ADELANTE 
}

//FUNCION PARA GUARDAR LAS NOTAS
export function saveNotesFromLocalStorage(notes) {
    // CONRVERTIMOS LAS NOTAS DE OBJETOS JS O JSON A TEXTO
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}
