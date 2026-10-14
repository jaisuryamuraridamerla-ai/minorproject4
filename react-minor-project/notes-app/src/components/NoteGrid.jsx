import NoteCard from './NoteCard';

function NoteGrid({ notes, hasNotes, onEdit, onDelete }) {
  // Conditional rendering: two different empty states + the grid
  if (!hasNotes) {
    return <p className="empty">No notes yet. Write your first one in the form.</p>;
  }

  if (notes.length === 0) {
    return <p className="empty">No notes match your search or category.</p>;
  }

  return (
    <div className="grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteGrid;
