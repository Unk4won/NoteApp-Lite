
export function NoteListItem({ note, active, onClick, onDelete }) {
  // Función para formatear la fecha
  const formatLastModified = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <div
      className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors flex justify-between items-center group
        ${active ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
      onClick={onClick}
    >
      <div>
        <h3 className="font-semibold text-gray-800 truncate">{note.title}</h3>
        <p className="text-sm text-gray-500">{formatLastModified(note.lastModified)}</p>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        className="text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ✕
      </button>
    </div>
  );
}

export default NoteListItem