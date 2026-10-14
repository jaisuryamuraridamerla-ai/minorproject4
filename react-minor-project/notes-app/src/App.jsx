import { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import NoteGrid from './components/NoteGrid';

const STORAGE_KEY = 'jotter.notes';

const loadNotes = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [editingId, setEditingId] = useState(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  // Side effect: persist notes whenever they change.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (data) => {
    const now = new Date().toISOString();
    const newNote = { id: Date.now(), ...data, createdAt: now, updatedAt: now };
    setNotes((prev) => [newNote, ...prev]);
  };

  const updateNote = (id, data) => {
    const updatedAt = new Date().toISOString();
    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, ...data, updatedAt } : note)));
    setEditingId(null);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (editingId === id) setEditingId(null);
  };

  // find(): look up the note currently being edited
  const editingNote = notes.find((note) => note.id === editingId) || null;

  const normalizedQuery = query.trim().toLowerCase();
  const visibleNotes = notes.filter(({ title, body, category: noteCategory }) => {
    const matchesCategory = category === 'All' || noteCategory === category;
    const matchesSearch =
      !normalizedQuery ||
      title.toLowerCase().includes(normalizedQuery) ||
      body.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app">
      <Header count={notes.length} />

      <div className="layout">
        <aside className="layout__form">
          <NoteForm
            editingNote={editingNote}
            onAdd={addNote}
            onUpdate={updateNote}
            onCancel={() => setEditingId(null)}
          />
        </aside>

        <main className="layout__notes">
          <div className="toolbar">
            <SearchBar query={query} onChange={setQuery} />
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>

          <NoteGrid
            notes={visibleNotes}
            hasNotes={notes.length > 0}
            onEdit={setEditingId}
            onDelete={deleteNote}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
