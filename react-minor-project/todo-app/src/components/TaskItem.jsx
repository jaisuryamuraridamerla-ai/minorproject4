import { useState } from 'react';
import { formatDueDate, isOverdue } from '../utils/date';

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const { id, title, dueDate, completed } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(title);
  const [draftDate, setDraftDate] = useState(dueDate || '');

  const startEditing = () => {
    setDraftTitle(title);
    setDraftDate(dueDate || '');
    setIsEditing(true);
  };

  const saveEdit = () => {
    const trimmed = draftTitle.trim();
    if (!trimmed) return;
    onEdit(id, { title: trimmed, dueDate: draftDate });
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') saveEdit();
    if (event.key === 'Escape') setIsEditing(false);
  };

  const overdue = isOverdue(task);

  if (isEditing) {
    return (
      <li className="task task--editing">
        <input
          className="input"
          type="text"
          aria-label="Edit task title"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <input
          className="input task__date-input"
          type="date"
          aria-label="Edit due date"
          value={draftDate}
          onChange={(e) => setDraftDate(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="task__actions">
          <button type="button" className="btn btn--primary" onClick={saveEdit}>
            Save
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className={`task ${completed ? 'task--done' : ''}`}>
      <label className="task__check">
        <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
        <span className="task__body">
          <span className="task__title">{title}</span>
          {dueDate && (
            <span className={`task__due ${overdue ? 'task__due--overdue' : ''}`}>
              Due {formatDueDate(dueDate)}
            </span>
          )}
        </span>
      </label>

      <span className={`badge ${completed ? 'badge--done' : 'badge--pending'}`}>
        {completed ? 'Completed' : 'Pending'}
      </span>

      <div className="task__actions">
        <button type="button" className="btn btn--ghost" onClick={startEditing}>
          Edit
        </button>
        <button type="button" className="btn btn--danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
