import { useState, useEffect } from 'react';
import { CATEGORIES } from '../utils/constants';

const EMPTY_FORM = { title: '', body: '', category: CATEGORIES[0] };

// One form reused for both creating and editing a note.
function NoteForm({ editingNote, onAdd, onUpdate, onCancel }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEditing = Boolean(editingNote);

  // When the user clicks "Edit" on a note, load it into the form.
  useEffect(() => {
    if (editingNote) {
      const { title, body, category } = editingNote;
      setForm({ title, body, category });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [editingNote]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...form, title: form.title.trim(), body: form.body.trim() };
    if (!data.title && !data.body) return;
    if (!data.title) data.title = 'Untitled';

    if (isEditing) {
      onUpdate(editingNote.id, data);
    } else {
      onAdd(data);
      setForm(EMPTY_FORM);
    }
  };

  const canSave = form.title.trim() || form.body.trim();

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2 className="note-form__heading">{isEditing ? 'Edit note' : 'New note'}</h2>

      <label className="field">
        <span className="field__label">Title</span>
        <input
          className="input"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Give it a name"
        />
      </label>

      <label className="field">
        <span className="field__label">Category</span>
        <select className="input" name="category" value={form.category} onChange={handleChange}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field__label">Note</span>
        <textarea
          className="input"
          name="body"
          rows={7}
          value={form.body}
          onChange={handleChange}
          placeholder="Write something..."
        />
      </label>

      <div className="note-form__actions">
        <button type="submit" className="btn btn--primary" disabled={!canSave}>
          {isEditing ? 'Save changes' : 'Add note'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn--ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
